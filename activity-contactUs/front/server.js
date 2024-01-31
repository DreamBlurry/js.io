const express = require('express');
const app = express();
const port = 4000;

app.get('/index', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.listen(port);
console.log('Server is running at port ' + port);