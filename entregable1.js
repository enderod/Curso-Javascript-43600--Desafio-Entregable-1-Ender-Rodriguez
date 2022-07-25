// Desafio Entregable N°1
/*Pedir un texto mediante prompt, concatenar un valor en cada repetición, 
realizando una salida por cada resultado, hasta que se ingresa “ESC”.*/


let entrada=prompt("Ingrese un nombre de usuario");
let mensaje=" ";
let i=1;
while(entrada!=="ESC"){
    mensaje=((i++)+" "+entrada);
    console.log(mensaje);
    entrada=prompt("ingrese otro nombre de usuario");
}
    alert("No se pueden ingresar mas nombres");
    
//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

/* Ejercicio de Practica
let entrada=prompt("ingrese un numero");
entrada=parseInt(entrada);
let mensaje=" ";
    for(i=1;i<=entrada; i++){
        mensaje+=("Hola"+"\n");
        alert(mensaje);
    }*/