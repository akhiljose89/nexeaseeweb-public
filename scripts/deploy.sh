#!/usr/bin/env bash
#
# Builds the site and publishes dist/ to the gh-pages branch, which is what
# nexeasee.com serves. Run it with:  npm run deploy
#
# This is the manual route. The same result happens automatically on every push to
# main via .github/workflows/deploy.yml, so you normally only need this to publish
# without pushing source first, or if the workflow is ever unavailable.
#
# -u makes any unset variable a hard error. That matters here: rsync --delete aimed at an
# empty destination variable would target "/" instead of the deploy folder.
set -euo pipefail

cd "$(dirname "$0")/.."
ROOT=$(pwd)

# gh-pages must never contain a build of code that main doesn't have, so refuse to
# publish while there are uncommitted changes.
if [ -n "$(git status --porcelain)" ]; then
  echo "Uncommitted changes found. Commit them first (git add -A && git commit), then re-run." >&2
  git status --short >&2
  exit 1
fi

SHA=$(git rev-parse --short HEAD)

# The build is a plain 'npm run build'; install dependencies only if they are missing.
[ -d node_modules ] || npm ci
npm run build

# Publish from a separate worktree so the project folder stays on its branch and
# node_modules can never end up in the published files.
git fetch origin gh-pages
WORKTREE=$(mktemp -d "${TMPDIR:-/tmp}/nexeasee-ghpages.XXXXXX")
# Leave the worktree before deleting it: git cannot prune from a directory that no longer exists.
trap 'cd "$ROOT"; git worktree remove --force "$WORKTREE" >/dev/null 2>&1 || true; git worktree prune' EXIT
git worktree add -B gh-pages "$WORKTREE" origin/gh-pages >/dev/null

# Safety check before anything is deleted: the destination must be a real git worktree
# folder created just above, never empty, "/" or the project itself.
if [ -z "$WORKTREE" ] || [ "$WORKTREE" = "/" ] || [ "$WORKTREE" = "$ROOT" ] || [ ! -e "$WORKTREE/.git" ]; then
  echo "Refusing to continue: '$WORKTREE' is not a valid deploy folder." >&2
  exit 1
fi

# Mirror dist/ into the branch. --delete drops files that no longer exist in the build
# (old hashed bundles); the .git exclude protects the worktree's own git link.
# --checksum compares file contents: rsync's default shortcut (same size and timestamp
# means unchanged) once skipped index.html, because a new build only changes the hash in
# the bundle's filename, so the size is identical. The page was left pointing at a bundle
# that had just been deleted.
rsync -a --checksum --delete --exclude='.git' "$ROOT/dist/" "$WORKTREE/"

cd "$WORKTREE"

# Never publish a page whose scripts or styles are missing.
for ref in $(grep -ohE '/assets/[^"]+' $(find . -name '*.html' -not -path './.git/*') | sort -u); do
  [ -f ".$ref" ] || { echo "A page references $ref but it is not in the build; not publishing." >&2; exit 1; }
done

git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy: gh-pages already matches this build."
  exit 0
fi
git commit -q -m "Deploy from main@$SHA"
git push origin gh-pages
echo "Deployed main@$SHA. GitHub Pages usually takes 1-2 minutes to go live."
