exports.start = (io) => { //objeto socket io, se utiliza modulo auslado, para permisos en tiempo real como hangouts
    io.on("connection", (socket) => { //se hace el enlace consumer con app.js
        console.log("usuario conectado " + socket.id)

        socket.on("disconnect", () => {
            console.log("usuario desconectado" + socket.id);
        })

        io.sockets.on('newcontact', (data) => {
            console.log(data)

        })

    })
}


/* 

exports.emitir = (io, data) => {
                        io.sockets.emit('newcontact', data)

                            socket.on('message', function(msg) {
            console.log(msg)

          socket.on('sendMessage', (data) => { // se enlaza con   sendMessage de contact component .ts
                    console.log(data) // se envia informacion de formulario por socket io desde el front
                    io.sockets.emit('respuesta', data) // se llama socket de respuesta de obtenerRespuesta
                        //se puede utilizar la gestion por microservicios pero es un websocket 
                })
              

        const sendNewContact = (io) => {
            io.sockets.emit('newcontact', data)
        }

        module.exports = {
            start,
            sendNewContact
        }


        io.sockets.emit('mensaje', {
                    msg: "hola como estas..."
                    socket.on('mensaje',
                        function(msg) {
                            console.log(msg) * /

                            // io.sockets.emit('newcontact', data)

                            /*io.sockets.on('newcontact', (data)=>{
                                console.log(data)
                            })*/
//  socket.on('newcontact', (data) => {
//console.log("llego ", data)
// io.sockets.emit('pedido', msg )
//socket.emit("emitiendo", data);
// io.sockets.emit('emitiendo', data)