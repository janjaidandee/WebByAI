import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/WebByAI/', // ตัวอย่าง: '/my-react-app/'
  plugins: [react()],
})
