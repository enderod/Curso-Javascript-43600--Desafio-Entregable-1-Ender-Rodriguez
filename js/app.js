// Desafio Entregable N°1 - Proyecto integrador
// Armar un simulador interactivo, la estructura final de tu proyecto integrador.
// Calcular pagos en cuotas sobre un monto determinado.

alert("Hola bienvenid@ a Payment calculadora de pagos.")
alert("Indiquenos el plan de cuotas y el precio de su producto para calcular el valor que debera pagar segun el plan de cuotas seleccionado.")

let producto="";
let precio

function calculodecuotas(){
    let plandecuotas=prompt("Indique el plan de cuotas con el que desea realizar su compra: \n 1 - Plan 3 cuotas \n 2 - Plan 6 cuotas \n 3 - Plan 12 cuotas \n Ingrese las letras ESC para salir de calculador"); 
    while (plandecuotas!=="ESC"){
        switch(plandecuotas){
            case "1":
                alert(trescuotas());
                alert("Muchas gracias por realizar su calculo de cuotas con nosotros"); 
            break;
            case "2":
                alert(seiscuotas());
                alert("Muchas gracias por realizar su calculo de cuotas con nosotros"); 
            break;
            case "3":
                alert(docecuotas());
                alert("Muchas gracias por realizar su calculo de cuotas con nosotros"); 
            break;
            default: 
                alert("Error, debe ingresar una opcion correspondiente al plan de cuotas que desea");
            break;
        } 
        break;
    }
}

function trescuotas(){
    let costodelproducto=parseInt(prompt("Ingrese el precio sugerido al publico del producto que desea"));    
    costodelproducto=(costodelproducto/3)
     return (("El monto a cancelar en el plan de tres cuotas es:" +" "+(costodelproducto.toFixed(2))+" "+"$Ars por cuotas"));
}

function seiscuotas(){
    let costodelproducto=parseInt(prompt("Ingrese el precio sugerido al publico del producto que desea"));    
    costodelproducto=(costodelproducto/6)
   return (("El monto a cancelar en el plan de seis cuotas es:" +" "+(costodelproducto.toFixed(2))+" "+"$Ars por cuotas"));
}

function docecuotas(){
    let costodelproducto=parseInt(prompt("Ingrese el precio sugerido al publico del producto que desea"));   
    costodelproducto=(costodelproducto/12)
   return (("El monto a cancelar en el plan de doce cuotas es:" +" "+(costodelproducto.toFixed(2))+" "+"$Ars por cuotas"));

}

calculodecuotas()
