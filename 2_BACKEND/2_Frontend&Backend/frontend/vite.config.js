import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {  
      '/api': 'http://localhost:3000',   //Here we told the proxy that wherever /api is there, append the given localhost
    }
  },
  plugins: [react()],
})
