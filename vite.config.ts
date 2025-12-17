import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use './' for offline/local viewing, '/Neuherz-Datathon/' for GitHub Pages
  base: './',
})
