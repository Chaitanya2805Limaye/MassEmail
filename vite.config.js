// vite.config.js
export default {
  // ...
  server: {
    proxy: {
      '/default': {
        target: 'https://ba0yhwxvh0.execute-api.ap-south-1.amazonaws.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/default': '/default/sendBulkEmails'
        }
      }
    }
  // ...
  }
}
