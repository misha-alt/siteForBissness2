import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Замените на имя вашего репозитория
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
