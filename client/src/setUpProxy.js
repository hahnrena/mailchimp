const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/api", createProxyMiddleware({
        target: 'http://localhost:3001',
        pathRewrite: {
          "^/api": "" // remove the /api prefix
        },
        changeOrigin: true,
        headers: {
          Connection: "keep-alive"
        }
      })
    )
  }
 