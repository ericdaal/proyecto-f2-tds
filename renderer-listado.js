var nombre = document.getElementById('ingreso')
var actualizar = document.getElementById('update')
var pedidos = document.getElementById('request')
window.comunicacion.listadoInventario('listado-inventario', function (event, args) {
  nombre.innerText = "Bienvenido :" + args
  //console.log(args)
})

var producto = ""
actualizar.addEventListener('click', function (evento) {
  evento.preventDefault()
  window.envio.listadoInventario(producto)
})

pedidos.addEventListener('click', function (evento) {
  evento.preventDefault()
  window.solicitudes.listadoInventario(producto)
})

const items = document.querySelectorAll('.list-group-item')
function toggleActive(current, index, arr) {
  arr.forEach(item => {
    if (item !== current) {

      item.classList.remove('active');
    }
  });
  current.classList.add('active');
  producto = current.innerText
}

items.forEach((item, index, arr) => {
  item.addEventListener('click', () => {
    toggleActive(item, index, arr);
  });
});
