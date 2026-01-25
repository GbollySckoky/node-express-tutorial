console.log('Express Tutorial')
/**
 * in every response we should always have res.end()
 * 
 * request object
 * * */

// creating a server
const http = require('http')

const createServer = http.createServer((req, res) => {
    console.log('user hit the server')
    res.writeHead(200, {
        "content-type": 'text/html'
    })
    res.write(`<h1>Hello World</h1>`)
    res.end()
})

createServer.listen(5000)