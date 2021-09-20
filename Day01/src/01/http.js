const http = require('http')
const fs = require('fs')

//req, res均为流
http.createServer((req, res) => {
    // console.log('Request received.', getPrototypeChain(res))
    // res.end('Hello world!')
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
        res.end('404')
    }
})
.listen(8061, () => {
    console.log('Listen at 8061')
})

function getPrototypeChain(obj){
    const protoChain = []
    while(obj = Object.getPrototypeOf(obj)) protoChain.push(obj)
    return protoChain
}