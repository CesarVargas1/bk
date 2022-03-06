const amqp = require('amqplib/callback_api'); // se hacen pruebas con postman y rabbit http://localhost:15672/ colas get message

exports.sendToNewQueue = function(queue, message) { //queda como modulo sendToNewQueue y llama la funcion es un nuevo modulo
    amqp.connect('amqp://localhost', function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }

            channel.assertQueue(queue, {
                durable: false
            });

            channel.sendToQueue(queue, Buffer.from(message));

            console.log(" [x] Sent %s", message);
        });

        setTimeout(function() {
            connection.close();
            process.exit(0)
        }, 500);
    });
}