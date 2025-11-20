import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx']
  },
  optimizeDeps: {
    include: ['react-native-web'],
    exclude: ['expo-in-app-purchases']
  },
  build: {
    rollupOptions: {
      external: (id) => {
        // Exclude expo-in-app-purchases from web build
        if (id.includes('expo-in-app-purchases')) {
          return true;
        }
        return false;
      }
    }
  }
})
