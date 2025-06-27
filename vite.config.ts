// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import type { Plugin } from 'postcss';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        
        autoprefixer() as Plugin,
      ],
    },
  },
});