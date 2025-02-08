import { defineConfig } from 'vite'
import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'kompoze',
      fileName: (format) => `kompoze.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    cssCodeSplit: true,
    rollupOptions: {
      treeshake: true,
      external: ['react', 'react-dom', 'react-transition-group'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-transition-group': 'ReactTransitionGroup'
        }
      }
    }
  },
  css: {
    modules: {
      generateScopedName: 'kze_[local]___[hash:base64:5]',
      scopeBehaviour: 'local'
    },
    devSourcemap: process.env.NODE_ENV === 'development'
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src']
    }),
    tsconfigPaths()
  ]
})
