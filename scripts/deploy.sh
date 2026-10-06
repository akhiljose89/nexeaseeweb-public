#!/usr/bin/env bash
#
# Builds the site and publishes dist/ to the gh-pages branch, which is what
# nexeasee.com serves. Run it with:  npm run deploy
#
# This is the manual route. The same result happens automatically on every push to
# main via .github/workflows/deploy.yml, so you normally only need this to publish
# without pushing source first, or if the workflow is ever unavailable.
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

# Mirror dist/ into the branch. --delete drops files that no longer exist in the build
# (old hashed bundles) and the .git exclude protects the worktree's own git link.
rsync -a --delete --exclude='.git' dist/ "$WORKTREE"/

cd "$WORKTREE"
git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy: gh-pages already matches this build."
  exit 0
fi
git commit -q -m "Deploy from main@$SHA"
git push origin gh-pages
echo "Deployed main@$SHA. GitHub Pages usually takes 1-2 minutes to go live."
