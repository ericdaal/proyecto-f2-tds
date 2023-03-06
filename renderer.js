/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let password = document.getElementById('password');
let fenac = document.getElementById('fenac');
let botonEnviar = document.getElementById('enviar');

nombre.placeholder = "Ingrese su nombre";

botonEnviar.addEventListener('click', function (evento){
        evento.preventDefault();
        //console.log(registro.value)
        window.comunicacion.inicioUsuario(nombre.value)
});