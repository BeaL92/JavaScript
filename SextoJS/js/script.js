/**
 * 
 * Bucles While
 * while(condicion){ ** se repite mientras la condición sea true
 *          //bloque de codigo
 * }
 * Ejemplo: mostrar en la consola los números del  1 - 15
 * 
 * Cuando se trabaja con números o otro elemento, tenemos que evaluar o buscar la manera que salga del bucle sino se quedaria en bucle infinito
 */
function primerWhile(){
let num=0;
while (num<=15){
    console.log(num);
    //si no se incrementa el valor de num el bucle nunca terminará
    num++;
}

let interruptor=false;

while(!interruptor){
    console.log(interruptor);
    let a="Maria", b="Juan";
    //si no cambio el valor de interruptor a true nunca terminara
    if(a != b){
        interruptor=true;
        console.log(interruptor);
    }
}
}


function arraysWhile(){
//Declaramos una constante tipo array de marcaCoches 
const cars= ["BMW","Volvo","Saab","Ford"];
// indice que nos va a permitir salir del bucle
let i =0; 
// texto que mostrará con todos los valores segun vaya recorriendo el bucle
let text=""; // inicializa la variable text en blanco o vacia 
while (cars[i]){
    text += cars[i]+" ";
    console.log(text);
    i++;
}
}


function cadenasWhile(){
let text2='';
while (text2==''){
    text2=prompt('Escribe un nombre');
    console.log(text2);
}
alert('Salio del bucle!');
}

//Ejercicio: Lee un número hasta que sea par, sino sigue leyendo!
function numeroParWhile(){
let num2;
while (num2%2 !=0){
    num2=parseInt(prompt('Escribe un número'));
    console.log(num2);
}
alert('Es par sale del bucle');
}

/**
 * Bucle Do While: hecer mientras..
 * 
 * Es igual al while con la diferencia que siempre se ejecuta al menos una vez
 * do{
 * //bloque de instruccuiones...
 * }while (condición);
 *
 * Ejemplo: Pedimos al usuario que escriba ek nombre Mariay mientras no lo haga lo vulve a pedir
 *  
 */
function nombreDoWhile(){
    let nombre='';
    do{
        nombre=prompt("Adivina el nombre");
    }while (nombre !='Maria');
    alert ("Has acertado");
}

function numeroDoWhile(){
    let text=1;
    let i=1;
    do{
        text +=" El numero es "+ i; 
        console.log(text);
    }
    while (i<text);
    console.log("Salio del bucle");
}
