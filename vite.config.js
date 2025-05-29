import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/maptiva/', // Añade esta línea
  plugins: [react()],
})