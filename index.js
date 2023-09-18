const express = require('express');
const port = 3000;
const app = express();
app.use(express.json())
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/landing.html");
});

app.listen(port, () => {
    console.log("Node application listening on port " + port);
});