// Desafio Entregable N°1 - Proyecto integrador
// Armar un simulador interactivo, la estructura final de tu proyecto integrador.
// Calcular pagos en cuotas sobre un monto determinado.


function calculodecuotas(){
    let plandecuotas= prompt("Indique el plan de cuotas con el que desea realizar su compra: \n 1 - Plan 3 cotas \n 2 - Plan 6 cotas \n 3 - Plan 12 cotas \n Ingrese las letras ESC para salir de calculador");
    while (plandecuotas!=="ESC"){
        switch(plandecuotas){
            case "1":
                alert(trescuotas());
            break;
            case "2":
                alert(seiscuotas());
            break;
            case "3":
                alert(docecuotas());
            break;
            default: 
                alert("Error, debe ingresar una opcion correspondiente al plan de cuotas que desea");
            break;
        }
        plandecuotas= prompt("Indique el plan de cuotas con el que desea realizar su compra: \n 1 - Plan 3 cotas \n 2 - Plan 6 cotas \n 3 - Plan 12 cotas \n Ingrese las letras ESC para salir de calculador");
        
        }
        alert("Muchas gracias por realizar su calculo de cuotas con nosotros"); 
}

function trescuotas(){
    let costodelproducto=parseInt(prompt("Ingrese el precio sugerido al publico del producto que desea"));    
     while (isNaN(costodelproducto)) {
     costodelproducto=parseInt(prompt("Ingrese el precio sugerido al publico en pesos argentinos"));
      }
     costodelproducto=(costodelproducto/3)
   return (("El monto a cancelar en el plan de tres cuotas es:" +" "+(costodelproducto.toFixed(2))+" "+"$Ars por cuotas"));
}

function seiscuotas(){
    let costodelproducto=parseInt(prompt("Ingrese el precio sugerido al publico del producto que desea"));    
     while (isNaN(costodelproducto)) {
     costodelproducto=parseInt(prompt("Ingrese el precio sugerido al publico en pesos argentinos"));
      }
     costodelproducto=(costodelproducto/6)
   return (("El monto a cancelar en el plan de tres cuotas es:" +" "+(costodelproducto.toFixed(2))+" "+"$Ars por cuotas"));
}

function docecuotas(){
    let costodelproducto=parseInt(prompt("Ingrese el precio sugerido al publico del producto que desea"));   
     while (isNaN(costodelproducto)) {
     costodelproducto=parseInt(prompt("Ingrese el precio sugerido al publico en pesos argentinos"));
      }
     costodelproducto=(costodelproducto/12)
   return (("El monto a cancelar en el plan de tres cuotas es:" +" "+(costodelproducto.toFixed(2))+" "+"$Ars por cuotas"));

}

calculodecuotas()
