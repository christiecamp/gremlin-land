//defineConfig helper - function that takes an object and returns a configuration object for Vite.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//export config object
export default defineConfig({
  plugins: [react(
    // {
    //   // autoImport: true,
    //   // babel: {
    //   //   plugins: [
    //   //     ['@babel/plugin-proposal-decorators', { legacy: true }],
    //   //     ['@babel/plugin-proposal-class-properties', { loose: true }]
    //   //   ]
    //   // }
  )],
  server: {
    port: 3000,
    open: true
  }
})
