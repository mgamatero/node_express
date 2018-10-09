const express = require('express')
const hbs = require('hbs')
var app = express()
const port = process.env.PORT || 3000;


//middleware
app.set(express.static(__dirname + '/public'))

//middleware for handlebars
app.set('view engine','hbs')

//middleware for partials
hbs.registerPartials(__dirname + '/views/partials')

//routes
app.get('/home',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:'Home',
        content:'homehomehomehomehome'
    })
})


app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About',
        content:'aboutaboutaboutaboutabout'
    })
})


app.get('/contact',(req,res)=>{
    res.render('contact.hbs',{
        pageTitle:'Contact',
        content:'contactcontactcontactcontact'
    })
})

app.listen(port,() =>{
    console.log(`Listening on PORT ${port}`)
})