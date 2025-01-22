import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables for the current mode
  const env = loadEnv(mode, process.cwd(), '');

  // Extract backend URLs from the environment variables
  const backendUrl =
    mode === 'production' ? env.VITE_BACKEND_URL_PROD : env.VITE_BACKEND_URL_DEV;

  if (!backendUrl) {
    throw new Error(`Backend URL not defined for mode: ${mode}`);
  }

  return {
    plugins: [react()],
    define: {
      VITE_BACKEND_URL: JSON.stringify(backendUrl), // Define globally for app usage
    },
    server: {
      proxy: {
        '/api': {
          target: backendUrl,
          changeOrigin: true,
        },
      },
    },
  };
});
