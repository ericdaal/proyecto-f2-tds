/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 * 
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld(
  'comunicacion',
  {
    inicioUsuario: (usuario) => ipcRenderer.send('inicio-sesion', usuario),
    bienvenidoUsuario: (canal, callback) =>ipcRenderer.on('bienvenido-usuario',callback) 
  }
)


