
/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
var formulario = document.getElementById('enviar')
var nombre = document.getElementById('nombre-login')
var password = document.getElementById('pass-login')
var regex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
formulario.addEventListener('click', function (evento) {
        evento.preventDefault()
        if (password.value.match(password)) {
                window.comunicacion.inicioUsuario(nombre.value)
        } else {
                alert("Ingresa alguna contraseña de las proporcionadas")
        }
})