let nombre = document.getElementById('ingreso');
window.comunicacion.bienvenidoUsuario('bienvenido-usuario', function(event, args){
    nombre.innerText = args
    //console.log(args)
})