import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: { include: ['react-router', 'react-router/dom'] },
  resolve: { dedupe: ['react', 'react-dom', 'react-router'], alias: { '@': path.resolve(import.meta.dirname, 'src') } },
})
