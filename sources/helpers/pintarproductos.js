export function pintarproductos(productos){
    productos.forEach(function (producto){

        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid","w-100","shadow")
        imagen.src=producto.fotos[0]
        let titulo=document.createElement("h5")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre
    let valor=document.createElement("h3")
    valor.classList.add("text-center","text-success")


    let descripcion=document.createElement("p")
    descripcion.classList.add("d-none")
    descripcion.textContent=producto.descripcion
    valor.textContent=producto.precio
   

    tarjeta.addEventListener("click",function(){
        imagen.src=producto.fotos[0]
        function saludar(nombre){
            console.log("hola"+nombre)
        }
        let nombre2="juan"
        saludar("catalina")
    })
tarjeta.addEventListener("mouseover",function(){
imagen.src=producto.fotos[1]
})

tarjeta.addEventListener("mouseleave",function(){
    imagen.src=producto.fotos[0]
})

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(valor)
        tarjeta.appendChild(descripcion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}