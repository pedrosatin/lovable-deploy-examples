import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'

// Explicit vercel preset: Lovable-style apps that default Nitro to Cloudflare
// return 404 on Vercel until this preset (or NITRO_PRESET=vercel) is set.
// Docs: https://tanstack.com/start/latest/docs/framework/react/guide/hosting
// Docs: https://nitro.build/deploy/providers/vercel
const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [nitro({ preset: 'vercel' }), tanstackStart(), viteReact()],
})

export default config
