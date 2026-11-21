import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'

// Explicit Vercel target for this sample. The deployed version already used
// this preset; a failing Cloudflare-preset deployment was not tested.
// Docs: https://tanstack.com/start/latest/docs/framework/react/guide/hosting
// Docs: https://nitro.build/deploy/providers/vercel
const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [nitro({ preset: 'vercel' }), tanstackStart(), viteReact()],
})

export default config
