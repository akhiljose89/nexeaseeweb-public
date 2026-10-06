import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages is a plain static host: it only serves files that exist, so a direct
 * visit or refresh on a client-side route like /about returns its 404 page even though
 * React Router would render it fine. After each build this copies the app shell
 * (index.html) to a real file for every route, so those URLs answer 200 and the router
 * takes over in the browser, and to 404.html, which Pages serves for any other address
 * (that is what lets NotFoundPage render).
 *
 * Keep ROUTES in sync with the <Route path> entries in src/App.tsx. A route missing
 * here still works through the 404.html fallback, but with a 404 status code, which
 * search engines will not index.
 */
const ROUTES = ['about', 'products', 'products/nextrazer', 'contact']

function spaFallbackPages(): Plugin {
  let outDir = ''
  return {
    name: 'spa-fallback-pages',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const shell = resolve(outDir, 'index.html')
      if (!existsSync(shell)) return
      copyFileSync(shell, resolve(outDir, '404.html'))
      for (const route of ROUTES) {
        const target = resolve(outDir, route, 'index.html')
        mkdirSync(dirname(target), { recursive: true })
        copyFileSync(shell, target)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallbackPages()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: { port: 5173 },
})
