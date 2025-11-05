// capacitor.config.ts
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.refurbly.app',
  appName: 'Refurbly',
  webDir: 'dist',
  server: {
    cleartext: true,
    allowNavigation: [
      '*.firebaseapp.com',
      '*.googleapis.com',
      '*.google.com'
    ]
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#3B82F6',
      showSpinner: false,
    },
  },
};

export default config;
