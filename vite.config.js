import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Ecommerce-project/', // Use the correct subdirectory for your GitHub Pages
  plugins: [react()],
});
