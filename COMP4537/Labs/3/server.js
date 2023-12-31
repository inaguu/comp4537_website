const http = require('http')
const url = require("url")
const fs = require('fs')

const dt = require('./modules/utils')

const port = 3000

http.createServer((req, res) => {
    const q = url.parse(req.url, true)

    if (q.pathname == "/COMP4537/Labs/3/writeFile/") {
        fs.appendFile("file.txt", q.query["text"], (err) => {
            if (err) {
                console.log(err)
                res.writeHead(404, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'})
                return res.end()
            } 
            res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'})
            res.write(`<p style="color: blue;">File writen successfully</p>`)
            console.log(`File write ${q.query["text"]}`)
            return res.end()
        })
    } else if (q.pathname.includes("readFile")) {
        let file = q.pathname.substring(q.pathname.lastIndexOf('/') + 1)
        fs.readFile(file, "utf8", (err, data) => {
            if (err) {
                console.log(err)
                res.writeHead(404, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'})
                res.write(`404 - no such file or directory <br> ${q.pathname.substring(q.pathname.lastIndexOf('/') + 1)}`)
                return res.end()
            } 
            res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'})
            res.write(`<p style="color: blue;">${data}</p>`)
            console.log(data)
            return res.end()
        })
    } else if (q.pathname == "/COMP4537/Labs/3/getDate/") {
        res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'})
        res.write(`<p style="color: blue;">Hello ${q.query["name"]}. What a beautiful day. Server current date and time is ${dt.date()}</p>`)
        return res.end()
    } else {
        res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'})
        res.write(`<p style="color: blue;">home page</p>`)
        return res.end()
    }

}).listen(port)

console.log("Server is running and listening on port: " + port)