/**
 * Concepto básico de funciones y métodos:
 * 
 * Una función JavaScript es un bloque de código diseñado para realizar una * tarea *particular.
 * Una función JavaScript se ejecuta cuando "algo" lo invoca (lo llama).
 * 
 * las funciones pueden ser propias, como por ejemplo:
 * funtion guardarNombre(){
 *       ....bloque de instruciones
 * }
 * 
 *para que ejecute ese bloque de instruciones, la función tiene que ser invocada ya sea en un javascript o desde hatml 
 * guardarNombre();
 * o desde html ... onclick= "guardarNombre()"
 * 
 * También existen funciones propias del lenguaje, que nos realizan algunas tareas de manera automática.
 * 
 * Ejemplo: Funciones útiles para cadenas de texto
 */

//  Función para conocer la longitud de una cadena, incluyendo los espacios
let cadena1= "Hola, como estais todos hoy? ";
let nLetras=cadena1.length;
console.log(nLetras);

// Funcion que concatena
let cadena2= " Bien, gracias!";
let cadena=cadena1.concat(cadena2); //es lo mismo que cadena1+cadena2
console.log(cadena);

// Concatenar en un bucle
for (let i=1;i<cadena1.length;i++){
    cadena+=cadena1;
}
console.log(cadena);


//Función para pasar a mayuscula una cadena de texto

cadena1=cadena1.toUpperCase();
// toLocaleUpperCase -> se refiere al idioma o configuracion local pero el resultado suele ser lo mismo que toUpperCase
console.log(cadena1);

//Funcion para convertir una cadena a minusculas

cadena1=cadena1.toLowerCase(); 
// toLocaleLowerCase -> se refiere al idioma o configuracion local pero el resultado suele ser lo mismo que toLowerCase
console.log(cadena1);

// Funcion para obtener el caracter que se encuentra en la posición indicada

let letra=cadena1.charAt(0); //retorna h
console.log(letra);

//Función indexOf(letra) calcula la posición en la que se encuentra la letra indocada, siempre mostrara la primera posición

let posicion=cadena1.indexOf('a');
console.log(posicion);

//lastIndexOf calcula la ultima posicion del caracter indicado,
//tanto indexOf como lastIndex devuelven -1 si no hay coincidencia.
posicion=cadena1.lastIndexOf('a');
console.log(posicion);


/** importante
 * La funcion lastIndexOf() comienza se busqueda desde el final de cadena hasta el principio, aunque la posicion devuelta es la correcta empezando a contar desde el principio de la palabra*/

//funcion para extraer de una cadena
/** subString(inicio,final), extrae una porción de una cadena de texto. El segundo parametro es opcional. Si sólo se indica el parámetro inicio, la funcion devuelve la parte de la cadena original corespondiente desde esa posicion hasta el final */
let subcadena1=cadena1.substring(6,10);
console.log(subcadena1);

/**
 * Cuando se indica el inicio y el final, se devuelve la parte de la cadena originalcomprendida entre la posición inicial y la inmediatamente anterior a la posición final (es decir, la posicion inicio esta incluida y la posicion  final no):
 */
/* Otro ejemplo, si se le pasa la posición inicial mayor a la final, see asume que es la posición menor es desde donde comienza y la mayor donde termina*/
subcadena1= cadena1.substring(10,6);
console.log(subcadena1);

/** convertir una cadena a un array con la función split, se debe indicar el caracter separador */
let cadena3="Los alumnos son 15 y son muy listos";
let arrayCadena3=cadena3.split(" ");
console.log(arrayCadena3); 
console.log(arrayCadena3[1]);
/** con split tambien puedo extraer todas las letras de una cadena indicando el separador vacio */
let array2Cadena3=cadena3.split("");
console.log(array2Cadena3);


//Funciones utiles para arrays
//Conocer la longuitud de un array

let miArray=[1,2,3,4,5,6,7,8,9];
// expliacacion en la línea 140
let  miCopiaArray=miArray;
console.log(miCopiaArray);
let numElementos=miArray.length;
console.log(numElementos);

// funcion para unir o concatenar dos arrays

let array3=array2Cadena3.concat(miArray);
console.log(array3);

//funcion join que es lo inverso al split en las cadenas, convierte un Array en una cadena
let deArrayAcadena=arrayCadena3.join(" ");
console.log(deArrayAcadena);
let miArrayAcadena=miArray.join(" - ");
console.log(miArrayAcadena);

/** funcion pop(), elimina el último elemento del array y lo devuelve. El array original se modifica y su longitud desminuye en 1 elemento */

let ultimo=miArray.pop();
console.log(ultimo);
console.log(miArray);

/** funcion push(), añade un elemento al final del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez) */
miArray.push("Bea");
console.log(miArray);

/**
 * funcion shift(), elimina el primer elemento del array y lo devuelve. El array original se ve modificado y su longitud disminuida en un elemento.
 */

let primero=miArray.shift();
console.log(primero);
console.log(miArray);

/** funcion unshift(), añade un elemento al principio del array. El arrray original se modifica y aumenta su longitud en 1 elemento. (tambien es posible añadir más de un elemento a la vez) */

let otroValor=5;
miArray.unshift(otroValor);
console.log(miArray);

/**
 * Funcion reverse() modifica un array colocando sus elementos en el orden inverso a su posición
 */
miArray.reverse();
console.log(miArray);

/** 
 * Es usual realizar operaciones con array, si es necesario para el flujo del programa que el array original se mantenga, debemos realizar una copia del array, porque estos métodos modifican directamente el array. Línea 97
 */

/*********************************************************************** */

/**
 * 
 * Funciones con número
 * 
 */

/**
 * 
 * Funcion NaN, (del inglés, "Not a Number") JavaScript emplea el valor NaN para indicar un valor númerico no definido (por ejemplo la división 0/0)
 */
let numero1=10,numero2=5;

console.log(numero1/numero2);//NaN

if(isNaN(numero1/numero2)){//true
    console.log("Resultado Indefinido")
}else{
    console.log("El resultado es -> " +numero1/numero2);
}

/* Números infinitos
Infinity, hace referencia a un valor numérico infinito y positivo (también exite el valor -Infinity para los infinitos negativos)*/
let numero3=0;
console.log(numero1/numero3);

/*si necesitamos limitar los decimales y redondear, utilizaremos la funcion toFixed */
let decimales=21454.4587566;
console.log(decimales.toFixed(3));
console.log(decimales.toFixed(2));
console.log(decimales.toFixed(4));
console.log(decimales.toFixed());


// Ejercico: lee un número decimal y devulvelo convertido el . en ,
function cambiar(){
let numero=document.getElementById("numero").value;
console.log(numero);
let elementos=numero.split(".");
console.log(elementos);
//concatenando
let cadenaNumero=elementos[0]+","+elementos[1];
//con el metodo join
let cadenaNumero2=elementos.join(",");
console.log(cadenaNumero);
console.log(cadenaNumero2);
document.getElementById("numeroDev").innerHTML=cadenaNumero;
}