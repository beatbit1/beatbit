import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Export the configuration
export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode (e.g., development, production)
  const env = loadEnv(mode, process.cwd(), '_VITE');

  return {
    plugins: [react()],
    // Dynamically define `_VITE` variables for use in the app
    define: {
      '_VITE_BACKEND_URL': JSON.stringify(env._VITE_BACKEND_URL),
    },
  };
});
