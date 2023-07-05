const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home nigga');
    } else if (req.url === '/about') {
        res.end('Wanna know about me bruhh');
    } else {
        res.end(`<h1>Oops!</h1> 
        <p>Go mess around here!</p>
        <a href='/'>back home</a>`)
    }
})

server.listen(5000)