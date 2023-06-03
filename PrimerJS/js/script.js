/*
Este script enseña: 
1. Comentarios
2. Insertar codigo en HTML con document.getElementById.innerHTML
3. Leer codigo desde el HTML con document.getElementById.value
4. Declarar variables - Tipos de variables
5. Asignar varoles a variables
6. Monstrar en la consola del navegador salidas -> console.log
7. Crear operaciones mátematicas básicas
8. Declarar una función 
9. Llamar a una función de HTML / llamar a una función dede el mismo JavaScript -> miFunction()
10. Convertir un valor de cadena en uno enterto con parseInt
11. Incremento y decrmento de valores con ++ --
12. Declarar constantes
13. Caracteres especiales en cadena de caracteres
14. Alertas
15. document.write
*/

// Comentarios de linea
/* 
Comentario de Bloque
*/
//alert("Hola mundo de Desarrollo Web");

// acceder a los elementos por id del html
// 1. crear una variable-> un lugar en memoria donde se almacena un valor
// 1.1 Declarar la variable indicando un nombre -(comenzar: letras, no numeros, no caracteres especiales)
//     debe ser en minuscula o camello-> nombreDel Usuario
//     no debe contener espacios (no-> nombre el Usuario)
//     se puede utilizar barra baja _ tanto en el comienzo como
//     en el contenido del nombe. Una buena práctica es  
//     comenzar con letras o con el simbolo del $

let nombre="Maria Perez"; //las comillas (dobles o simple) indican que es una cadena de caracteres 
let parrafo=document.getElementById("parrafo");//declaramos una variable llamada parrafo que enlaza con id del HTML
parrafo.innerHTML = nombre;//le indicamos a esa variable que inserte el valor de la otra variable nombre.
console.log(nombre); //console.log-> es una instrucción que se muestra en la consola del navegador

document.getElementById("demo").innerHTML="Hello JavaScrit";

// variables tipo entero
let numero1=45;
let numero2=25;
let suma=45+25;
console.log(suma);
let apellido="Ruiz";
//reemplazo el valor de nombre concatenando con el apellido
nombre=nombre+" "+apellido;//concatenar cadenas de caracteres
console.log(nombre);
document.getElementById("nuevoNombre").innerHTML=nombre;
// caracteristicas de javaScript .... no declarar el tipo de dato
numero1="uno";
suma=numero1+numero2;
console.log(suma); //es una manera de visualizar una salida en javaScript

/*crear mi primera función-> una serie de instrucciones que se ejecutaran cuando sea llamada */
function mostrarAlerta(){
    alert("Hola Chicos")
    document.getElementById("parrafo2").innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, autem sequi, ipsa minus odit a dolorum, inventore quis laborum earum veniam ipsum deserunt repellat dignissimos non. Tenetur officiis pariatur eos?"
}
//Otra manera de llamarlo 
/*document.getElementById('boton1').onclick = function() {
     alert ("Hey Alerta Wey!")}*/

/* Paso de parametros a una funcion */
//casting-> cambiar de un tipo a otro de caracteres-> numeros
document.getElementById("suma").innerHTML=sumar(45,34);
function sumar(a,b){
    return a+b;
}
/*
*La siguiente función muestra una aleta e inserta un parrafo
* en el lugar donde se identifica id=parrafo2
*/
function sumar2(){
let x= parseInt( document.getElementById("numero1").value);
let y= parseInt(document.getElementById("numero2").value);
document.getElementById("suma2").innerHTML="El valor de x es " + x + " El valor de y es " + y + " y la suma de los dos valores es "+ (x+y);
}

// existe otra manera de declarar las variable <2015
var nombreAlumno= "Rosa Huertas";
console.log(nombreAlumno);
// diferencia entre var y let
//1. Se puede volver a declarar la misma variable
var nombreAlumno="José Martinez"
console.log(nombreAlumno);
//ejemplo con let
let nombrePadre="Miguel García";
console.log(nombrePadre);
// no se puede declarar de nuevo una variable con let
//en el mismo bloque de codigo
function otroNombre(){
    let nombrePadre="Gonzalo León";
    console.log("Dentro de la función-> " +nombrePadre);
}
otroNombre();// llamamos la función para que se ejecute
console.log("Fuera de la función-> "+nombrePadre);
// en la declaración de las variables se puede declarar una o más variables en la misma linea
//var nombreMadre;//declaración-> indicando que nombreMadre es una variable
let nombreMadre="Sofia Luna", nombreNino="Fiona Martinez", colegio="Cervantes";
//las variables no estas obligado a declararlas, pero es importante y buena practica
edad=15; // tipo de números entero...
console.log(edad);
precio=5.8;// decimal
console.log(precio);
edad=18;//reemplaza el valor
console.log(edad);
nombreMadre="Rosa Díaz";  //le asigno a la variable nombreMadre en valor de Rosa Díaz
console.log(nombreMadre);
/*
 lo que se guarda en una variable
 tipos-> números (5, 4, 5.9, etc)
         cadena de caracteres ("El nombre es")
         booleanos (true, false)->(verdadero, falso)
*/
let miBooleano=true; //on / off - 0/1
//las cadenas de caracteres existe la limitante de utilizar "" dentro de una cadena
//para ello exite Caracteres de escape en cadenas de texto
let cadena="Esta es una cadena\" muy importante\" de javaScript";
console.log(cadena);
// puedes combinar las dobles comillas con las comillas simples
let cadena2='Esta es la segunda cadena "muy importante"';
console.log(cadena2);
cadena="Esta es una cadena 'muy importante' de javaScript";
console.log(cadena);
//salto de linea con caracteres de escape \n
cadena="Esta es una cadena 'muy importante' \nde javaScript";
console.log(cadena);

/* Operadores Matemáticos
    + - * /-> Operaciones básicas
    %-> móduloo resto de dos números
*/
x=10;
y=2;
let modulo=10%2;// da como resultado el resto de la división
console.log("El módulo entre 10/2 es: " +modulo);
let operacion=(x+2)*2-(y/3);
console.log(operacion);
/*
Operadores de asignación
    = asigna
    += incrementa el numero 
    -= decrementa
    *= multiplica
    /= divide
*/
x+=2; //x=12
console.log(x);
x-=2; //x=10
console.log(x);
x*=2;
console.log(x);
x/=2;
console.log(x);

//se puede utilizar el operador de asignación += eb las cadenas de caracteres
cadena+=cadena2;
console.log(cadena);
//Operador exponencial
x=y**10
console.log(x);
//Operador incremento
++y;
console.log(y);
//Operador decremento
--y;
//salida en pantalla directamente insertando el texto en la última
//línea disponible.
document.write("El valor de y es "+y);

/*
        - Constantes -
    No cambian en el resto del programa, se declara con la "palabra reservada" const y se debe asignar su valor cuando se declara

    palabras reservadas (palabras clave)= propias del lenguaje 
    let, var, const...
*/
const PI=3.141618;//las constantes se declaran en mayusculas
const MONEDA=5;
//área de un circulo area=r**2xPI
let area=(50**2)*PI;
console.log("El área de una circunferencia de radio 50 es " +area);



