const http = require("http");
const port = 8000;
const host = '127.0.0.1'

const server = http.createServer((req, res)=> {
    res.end('Hello sameer')
})

server.listen(port, host, ()=>{
    console.log('server started at ' + host + ":"+ port )
})
console.log('hey')