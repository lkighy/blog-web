module.exports = {
    baseUrl: '/',
    devServer: {
        proxy: {
            '/book': {
                target: 'http://127.0.0.1:8088',
                ws: true,
                changeOrigin: true,
            },
        }
    }
}