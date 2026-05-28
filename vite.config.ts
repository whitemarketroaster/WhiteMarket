import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '..',
        'C:/Users/Micker/.gemini/antigravity/brain/cfde68da-b28d-4042-be2a-dd7dfcff125d'
      ]
    }
  }
})
