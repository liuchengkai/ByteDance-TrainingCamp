const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const {url, method} = req
    console.log(url, method)
    if(url === '/' && method === 'GET'){
        fs.readFile('index.html', (err, data) => {
            if(err){
                res.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                res.end('错误')
                return
            }
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html;charset=utf-8')
            res.end(data)
        })
    }else{
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('迷路了吗？')
    }
})
.listen(8061, () => {
    console.log('Listen at 8061')
})