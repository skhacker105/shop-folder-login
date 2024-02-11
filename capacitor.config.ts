import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.shopfolder.app',
  appName: 'shop-folder-login',
  webDir: 'dist/shop-folder-login',
  server: {
    androidScheme: 'https'
  }
};

export default config;
