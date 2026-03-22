import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-core';
          }
          // React Router
          if (id.includes('react-router')) {
            return 'router';
          }
          // Framer Motion - large library, separate chunk
          if (id.includes('framer-motion')) {
            return 'framer';
          }
          // i18next core only (react-i18next stays with React)
          if (id.includes('node_modules/i18next/') && !id.includes('react-i18next')) {
            return 'i18n';
          }
          // Radix UI components
          if (id.includes('@radix-ui')) {
            return 'ui';
          }
          // Lucide icons
          if (id.includes('lucide-react')) {
            return 'icons';
          }
        },
      },
    },
    minify: 'esbuild',
    target: 'es2020',
    // Increase chunk size warning limit since we're code-splitting intentionally
    chunkSizeWarningLimit: 600,
  },
})
