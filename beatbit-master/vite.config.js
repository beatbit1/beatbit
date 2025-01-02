import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '_VITE');

  // Dynamically set the backend URL
  const backendUrl =
    mode === 'production' ? env._VITE_BACKEND_URL_PROD : env._VITE_BACKEND_URL_DEV;

  return {
    plugins: [react()],
    define: {
      '_VITE_BACKEND_URL': JSON.stringify(backendUrl), // Define dynamically
    },
  };
});
