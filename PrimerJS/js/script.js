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
function sumar2(){
let x= parseInt( document.getElementById("numero1").value);
let y= parseInt(document.getElementById("numero2").value);
document.getElementById("suma2").innerHTML="El valor de x es " + x + " El valor de y es " + y + " y la suma de los dos valores es "+ (x+y);
}

document.getElementById("suma").innerHTML=sumar(45,34);
function sumar(a,b){
    return a+b;
}
