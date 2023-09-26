const http = require('http')
const url = require("url")
const fs = require('fs')

const dt = require('./modules/utils')

const port = 3000

http.createServer((req, res) => {
    let q = url.parse(req.url, true)
    res.writeHead(200, {'Content-Type': 'text', 'Access-Control-Allow-Origin': '*'})
    if (q.pathname == "COMP4537/labs/3/getDate") {
        res.write(`<p style="color: blue;">Hello ${q.query["name"]}. What a beautiful day. Server current date and time is ${dt.date()}</p>`)
        res.end()
    } else {
        res.write("404")
        res.end()
    }    
}).listen(port)

console.log("Server is running and listening on port: " + port)