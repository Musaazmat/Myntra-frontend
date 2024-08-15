import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    port:5173,
    proxy:{
      '/api': {
        target:'http://localhost:8080/items',
        changeOrigin:true,
        rewrite: ( path)=> path.replace(/^\/api/,''),
      },
    },
  },
});
