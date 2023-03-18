let numero=document.getElementById("number")

function comprueba(valor){
   if(valor.value<0){
       valor.value=1
   }
}

numero.addEventListener("keypress",function(event){
    console.log(numero)
    if(event.key==="Enter"){
        let valor=JSON.parse(localStorage.getItem("producto"))
        let subtotal=document.getElementById("subtotal")
        let suma=valor.precio
        subtotal.textContent=suma*numero.value
    }
})

  


