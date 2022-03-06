//const config = require('./config/config')
//configurar el servidor por medio de socket io
const express = require('express')
app = express()
bodyParser = require("body-parser") // body-parser convierte todo lo de body en json
cors = require('cors') // ayuda a conectar a x servidor
http = require('http').Server(app) // es propio de angular por eso no se agrega en el package.json

io = require("socket.io")(http, {
    // se hace el enlace io con http
    cors: { origins: ["http://localhost:4200/"], },
});

config = require("./config/config") //llama las ip  de config.js
db = require("./database/database") // conectar a la bd por medio de mongoose.connect
consumer = require("./io/consumer") // se hace el enlace APP.JS io/consumer

consumer.start(io)

app.use(bodyParser.urlencoded({ extended: false })) // se llama el body parser
app.use(bodyParser.json()) // SE CONVIERTE A JSON
app.use(cors())

app.use("/api", require("../bk/routes/index")) // por defecto busca el index

http.listen(config.port, () => {
    // arranca el servicio
    console.log(`Server is running in port ${config.port}`);
});