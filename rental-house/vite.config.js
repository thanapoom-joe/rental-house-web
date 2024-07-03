import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rental-house-web",
  build: {
    sourcemap: true
  },
  server: {
    open: true
  }
})
