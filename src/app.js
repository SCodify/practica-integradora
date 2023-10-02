const express = require('express')
const handlebars = require('express-handlebars')//handlebars
const router = require('./router')
const connectMongo = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))//handlebars

app.engine('handlebars', handlebars.engine())//handlebars
app.set('views', __dirname + '/views')//handlebars

connectMongo()

router(app)

module.exports = app

