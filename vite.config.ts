
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Dev-only: serve CDN assets via the published domain (hosting handles /__l5e in production)
    proxy: {
      "/__l5e/assets-v1": {
        target: "https://looptica.com",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    
    // Add filenames with hashes for cache busting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Split UI components
          ui: [
            'sonner',
            'lucide-react',
            'clsx',
            'tailwind-merge'
          ]
        },
        // Use hashed filenames for better caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    
    // Optimize browser compatibility
    target: 'es2015',
    
    // Minimize output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    },
    
    // Generate source maps for debugging
    sourcemap: mode !== 'production',

    // Ensure proper handling of special characters in URLs
    assetsInlineLimit: 4096,
  },
  css: {
    // Use PostCSS processing
    postcss: './postcss.config.js',
    
    // Minimize CSS in production
    devSourcemap: true,
  },
  optimizeDeps: {
    // Include dependencies that might need optimization
    include: ['react', 'react-dom', 'react-router-dom'],
  }
}));
