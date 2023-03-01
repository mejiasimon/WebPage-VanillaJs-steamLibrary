export function pintarproductos(productos){
    productos.forEach(function (producto){

        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid","w-100","shadow")
        imagen.src=producto.fotos[0]
        let descripcion=document.createElement("h3")
        descripcion.classList.add("text-center")
        descripcion.textContent=producto.nombre
    let valor=document.createElement("h5")
    valor.classList.add("text-center","text-success")
    valor.textContent=producto.precio
   

tarjeta.addEventListener("mouseover",function(){
imagen.src=producto.fotos[1]
})

tarjeta.addEventListener("mouseleave",function(){
    imagen.src=producto.fotos[0]
})

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(valor)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}