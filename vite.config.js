import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/birthday-page-3a0b0c8x9y7z/', // Wichtig: Dein Repo-Name
    server: {
        port: 3000,
        open: true
    }
})
