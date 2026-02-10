import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          if (/\.(css)$/.test(assetInfo.name)) {
            return 'css/[name].[hash].[ext]';
          }
          if (/\.(ico|png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
            return 'assets/img/[name].[hash].[ext]';
          }
          return 'assets/[name].[hash].[ext]';
        },
      }
    }
  },
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler']
      },
    }),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.7, 0.9], speed: 3 },
      svgo: { plugins: [{ name: 'removeViewBox', active: false }] },
      webp: { quality: 80 },
    }),
  ],
})
