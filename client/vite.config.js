import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://legalizeme.azurewebsites.net/api/cases/?cursor=cD02OA%3D%3D'
    }
  },
  plugins: [react()],
  build: {
    sourcemap: true
  },
});