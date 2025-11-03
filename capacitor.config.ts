// capacitor.config.ts
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.refurbly.app',
  appName: 'Refurbly',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#3B82F6', // <-- keep on one line
      showSpinner: false,
    },
  },
};

export default config;
