const LOCAL_PROXY_CONFIG = [
  {
    context: [
      '/api/v1'
    ],
    target: 'http://localhost:8080',
    changeOrigin: true
  }
]

module.exports = LOCAL_PROXY_CONFIG;
