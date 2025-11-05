import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import removeCrossorigin from './vite-plugin-remove-crossorigin.js'

export default defineConfig({
  plugins: [react(), removeCrossorigin()],
  base: '/',
})
