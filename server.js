const express = require('express')
var app = express()

app.set(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.send('Hello Mundo')
})

app.listen(3000,() =>{
    console.log('Listening on PORT 3000')
})