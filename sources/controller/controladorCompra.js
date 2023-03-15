let infoProducto=JSON.parse(localStorage.getItem("producto"))

let foto=document.getElementById("imagen")
foto.src=infoProducto.foto
let nombre=document.getElementById("titulo")
nombre.textContent=infoProducto.nombre
let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio
let descripcion=document.getElementById("descripcion")
descripcion.textContent=infoProducto.descripcion



let pildora_numero=document.getElementById("pildora")
let carrito
let info_carrito=JSON.parse(localStorage.getItem("carrito"))

if(info_carrito!=null){
    carrito=info_carrito
    pildora_numero.textContent=carrito.length
}
else{
    carrito=[]
}


console.log(carrito)
let button_agregar=document.getElementById("agregar")
button_agregar.addEventListener("click",function(){
    console.log(carrito)
    carrito.push(infoProducto)
    pildora_numero.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
})