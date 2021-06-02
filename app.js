const express = require('express');
const bodyParser = require('body-parser');

const app = express()

//static files

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//set template engine

app.set('views','./src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended : true}))

//routes

const newsRoute = require('./src/route/news')

app.use('/article', newsRoute)
app.use('/', newsRoute)


let PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`The server is running on port - ${PORT}`)
})


