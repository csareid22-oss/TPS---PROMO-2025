import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use Netlify's env var if present, otherwise default to your Render backend
const API_URL = process.env.VITE_API_URL || 'https://tps-promo-2025.onrender.com'

export default defineConfig({
  plugins: [react()],
  define: {
    __API_URL__: JSON.stringify(API_URL), // available in your app code
  },
  server: { host: true },
  build: { outDir: 'dist' }
})
