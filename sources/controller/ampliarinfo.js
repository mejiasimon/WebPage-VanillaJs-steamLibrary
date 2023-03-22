let numero=document.getElementById("number")
numero.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        let valor=JSON.parse(localStorage.getItem("producto"))
        let subtotal=document.getElementById("subtotal")
        let suma=valor.precio
        let poner=suma*numero.value
        subtotal.textContent=poner
        localStorage.setItem("total",JSON.stringify(poner))
    if (numero.value<0) {
        numero.value=1
    }
    }
})
let dolares=document.getElementById("pasar_dolares")
dolares.addEventListener("click",function(){
let total=JSON.parse(localStorage.getItem("total"))
subtotal.textContent=(total/5000+"USD")
})



  


