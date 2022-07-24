/*Pedir un texto mediante prompt, concatenar un valor en cada repetición, 
realizando una salida por cada resultado, hasta que se ingresa “ESC”.*/


let entrada=prompt("ingrese un nombre de usuario");
let mensaje=" ";
let i=1;
while(entrada!=="ESC"){
    //mensaje+=(entrada+"\n");
    mensaje=((i++)+" "+entrada);
    console.log(mensaje);
    entrada=prompt("ingrese otro usuario");
}
    alert("no se pueden ingresar mas nombres");
    
//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

/*
let entrada=prompt("ingrese un numero");
entrada=parseInt(entrada);
let mensaje=" ";
    for(i=1;i<=entrada; i++){
        mensaje+=("Hola"+"\n");
        alert(mensaje);
    }*/