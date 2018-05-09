const express        = require('express')
const app            = express()
const helmet         = require('helmet')
const path           = require('path')
const server         = require('http').createServer(app)
const port           = 8081

app.use(express.json())                                             //allows parsing of json form data
app.set("view engine", "pug")                                       //uses pug as the template engine to render html page
app.set("views", path.join(__dirname, "views"))
app.use("/static", express.static(path.join(__dirname, "public"))) //allows easy routing to anything within public folder
app.use(helmet())

server.listen(port, () => {
  require('./app/routes.js')(app,port)
  console.log('listening on port:', port)
})
