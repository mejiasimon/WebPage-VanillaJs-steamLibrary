let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)
let foto=document.getElementById("imagen")
foto.src=infoProducto.foto
let nombre=document.getElementById("titulo")
nombre.textContent=infoProducto.nombre
let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio