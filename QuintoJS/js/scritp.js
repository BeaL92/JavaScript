/**
 * if - else -> tambien existe otra estructura de control de flujo swith-case
 * Su funcion es: segun el parametro o valor que contega, puede realizar una serie de opciones.
 * El:
 * switch (expression){
 * case x:
 *  //code block
 *  break; //para salir del swith y no segir evaluando los sigientes casos
 * case y:
 *  //code block
 *  break;
 *  default:
 *  //code block
 * }
 * 
 * Asi es cimo funciona:
 * 
 * La expresión de cambio se evalua una vez.
 * El valor de la expresión se compara con los valores de cada caso.
 * Si hay una coincidencia, se ejecuta el bloque de codigo asociado.
 * Si no hay nunguna coincidencia, se ejecuta el bloque de codigo predeterminado (default).
 */
// Ejemplo sencillo 
//let dia=new Date().getDay()
let dia=2;
console.log(dia);
let diaS;// declaramos la variable donde guardaremos el nombre del dia
switch(dia){
    case 1:
        diaS="Lunes";
            break;//salga del switch
    case 2:
        diaS="Martes";
            break;
    case 3:
        diaS="Miercoles";
            break;
    case 4:
        diaS="Jueves";
            break;
    case 5:
        diaS="Viernes";
            break;
    case 6:
        diaS="Sabado";
            break;
    case 7:
        diaS="Domingo";
            break;
    default:
        diaS= "Ese día no existe"
}
document.getElementById("dia").innerHTML=diaS;

/**
 * 
 * Ejercicio:
 * De la base de la puntuación numerica de los alumnos,
 * indicamos que del 0 al 4-> Insuficiente
 *                   5 al 6-> Bien
 *                   7 al 8-> Notable
 *                   9 al 10-> Sobresaliente   
 * 
 */
function notaFinal(){
   
   
   
let nota=parseInt(document.getElementById("nota").value);
let notaF;
switch (nota){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        notaF="Insuficiente";
        break;
    case 5:
    case 6:
        notaF="Bien";
        break;
    case 7:
    case 8:
        notaF="Notable";
        break;
    case 9:
    case 10:
        notaF="Sobresaliente";
        break;
    default:
        notaF="No existe la nota";
        
}
document.getElementById("msn").innerHTML=notaF; 
}

/**
 * for (let i=1;i<10:i++)
 * 
 * 
 * Ejercico: Mostrar en consola los numeros del 1 al 20 de mayor a menor
 * 
 * for(let i=20;i>0;i--)
 */
for (let i=20;i>=0;i=i-2){
    console.log(i);
}

//bucle for each->
function cambiarColor(){
let colores=["blue","red","pink","orange","green","violet"];

let indice=parseInt(document.getElementById("numero").value);
console.log (indice);
--indice;

for(let i=0; i<colores.length;i++){
    if (i==indice){
        //cambiar el color a el div caja
        document.getElementById("caja").style.backgroundColor=colores[i];
        document.getElementById("dia").style.color=colores[i];
        }
    }
    //recorrer el array con for of
    for (let item of colores ){
        // recorremos todos los elementos del array
        if(item=="#001100"){
        //item contiene el valor no el indice
        document.getElementById("caja2").style.backgroundColor=i;

        document.getElementById("caja2").style.transition="width 2s, height 2s, transform 2s";
        document.getElementById("caja2").style.transform="rotate(180deg)";
        }
    }
    /**transiton-property: width;
     * transiton-duration: 2s;
     * transiton-property: height;
     * transiton-delay: 2s;
     */
}

