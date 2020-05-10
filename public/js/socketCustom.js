var socket = io();

// escuchar sucesos.
socket.on('connect', function () {
    console.log('conectado al servidor')
})

socket.on('disconnect', function () {
    console.log('perdimos conexion ')
})

//escuchar informacion
socket.on('enviarM', function (mensaje) {
    console.log('mensaje :>> ', mensaje);
})


// enviar información 
socket.emit('enviarMensaje', {
    usuario: 'Arón',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log(resp.respuesta)
});

