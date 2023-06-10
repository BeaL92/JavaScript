/**
 * Ectructuras de control de flujo
 * ________________________________
 * Bucle for: La estructura permite realizar repeticiones
 * for(inicialización, condición, incremento){}
 */


for(let i=0;i<10;i++){
    console.log(i);
}
console.log("salida del bucle");

/**
 * La idea del funcionamiento de un bucle for es la siguiente: "mientras la condición indicada sse siga cumpliendo, repitela ejecución de las instrucciones definidas dentro del for. Además, depués de cada repetición, actualiza el valor de las variables que se utilizan en la condición"
 */

//ejemplo de un bucle con loss diferentes <hx> de Html
function salidaH(){
for (let i=1;i<=6;i++){
    document.write("<h"+i+">"+"Encabezado de nivel "+i+"</h"+i+">");
}
}

/**
 Ejercico
 El factorial de un número entero n es una operación matemática que consiste en multipliar todos los factores n x (n-1) x (n-2)... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
 Utilizando la estructra for, crear un scriprt que calcule el factorial de un número entero  
 */
function calFact(){
    let numero=document.getElementById("numero").value;
    //borra el contenido de los selectores por si tienen algo anterior
    document.getElementById("msnError").innerHTML="";
    document.getElementById("resultadoFact").innerHTML="";
    //verificar que lee corectamente el numero
    console.log(numero);
    if(isNaN(numero)){//si no es un numero
        // a cometido un error al introducir el numero
        let msnError="Indica un número, no letra!";
        document.getElementById("msnError").innerHTML=msnError;
    }else{
        //hacmeos el bucle factorial
        let resultado=1;
        //bucle
        for(let i=1;i<=numero;i++){
            resultado*=i;//
        }
    document.getElementById("resultadoFact").innerHTML=resultado;
    }
}

/* 
* Una estructura de control derivada de for es la estructura for...in. Su definición exacta implica el uso de objetos, que es un elemento de programación avanzada.
* estructura for ... in adaptada a su uso en ARRAYS
*/
function mostrarDias(){

    let dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
    for(i in dias){
        etiqueta="etiqueta"+i;
        document.getElementById(etiqueta).innerHTML=dias[i];

    }
}
