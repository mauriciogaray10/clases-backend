const socket = io();
const input = document.getElementById('textbox')
const texto = document.getElementById('text')

input.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        socket.emit('message', input.value)
        input.value ===''
    }

})
socket.on('imprimir', (data)=> {
    let mensajes = ''
    data.forEach(msj => {
        mensajes  += `${msj.socketId} escribió: ${msj.message}</br>` 
    });
    text.innerHTML = mensajes
})




