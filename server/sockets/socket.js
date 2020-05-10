const { io } = require('../server');

io.on('connection', (client) => {
    console.log('cliente conectado ');

    client.emit('enviarM', {
        usuario: 'Admin',
        mensaje: 'Welcome'
    })


    client.on('disconnect', () => {
        console.log('usuario desconecto ');
    })

    //escuchar el cliente

    client.on('enviarMensaje', (mensaje, callback) => {


        console.log('mensaje :>> ', mensaje);



        client.broadcast.emit('EnviarMensaje', data);

        // if (mensaje.usuario)
        //     callback({
        //         respuesta: 'ok'
        //     });
        // else
        //     callback({
        //         respuesta: 'mal alv :V'
        //     });


    })

})