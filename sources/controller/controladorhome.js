import {productos} from "../controller/basedatos.js"
import { pintarproductos } from "../helpers/pintarproductos.js"
let fila=document.getElementById("fila")
pintarproductos(productos)
//pintar productos

    
//escuchando click en la fila contenedora de productos
fila.addEventListener("click",function(evento){
let datos_Seleccionado={}
let tarjeta=evento.target.parentElement
datos_Seleccionado.foto=tarjeta.querySelector("img").src
datos_Seleccionado.nombre=tarjeta.querySelector("h5").textContent
datos_Seleccionado.precio=tarjeta.querySelector("h3").textContent
datos_Seleccionado.descripcion=tarjeta.querySelector("p").textContent
//usaremos el local storage para guardar esta info
localStorage.setItem("producto",JSON.stringify(datos_Seleccionado))
window.location.href="/sources/views/ampliarinfo.html"
})


