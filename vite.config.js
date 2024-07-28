import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/TPfinalconReact/', // Asegúrate de que esta ruta coincida con el nombre de tu repositorio
  plugins: [react()],
  build: {
    outDir: "build"
  }
})
