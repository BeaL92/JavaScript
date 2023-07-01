/**
 * Funciones eb JavaScript
 * 
 * Es un bloque de código con un nombre, que puede ser invocado desde el mismo JavaScript o desde el documento HTML.
 * 
 */

function sumar() {
    let a=5,b=3;
    let suma=a+b;
    return suma;// retorna un valor
} 
console.log(sumar());//recibimos el resultado de la operación en la función

/**Otro ejemplo donde los valores de a y b no estan definidos */
function sumar2() {
    let suma=a+b;
    return suma;
}
// la declaración de a y b tiene ambito local y solo tienen valor en la función sumar()
//tenemos que declarar las variables a y b, por ejemplo con ambito global
let a=12,b=15;
console.log(sumar2());

//funcion con argumentos o valores que recibe
function multiplicar(primerN,segundoN){
    return primerN*segundoN;
}
//se tiene que pasar los argumentos que necesita para realizar la operación
console.log(multiplicar(25,3));
console.log(multiplicar(2,10));
console.log(multiplicar(a,b));

function dividir(primerN,segundoN) {
    return(segundoN/primerN);   //0/5 
}
console.log(dividir(5,0));

/*Ejjercico1: calcula el precio + iva de los siguientes productos:
leche=0.76
agua=1.05
cereales=2.35
mermelada=1.96
tomando en cuenta que el iva es el 4%
*/

function calcularIva(producto){    
    return producto*1.04;

}
console.log(calcularIva(0.76).toFixed(2));
console.log(calcularIva(1.05).toFixed(2));
console.log(calcularIva(2.35).toFixed(2));
console.log(calcularIva(1.94).toFixed(2));

// Se puede almacenar el resultado de una función en una valiable
//se remplaza los valores de a y b con el resultado de las funciones llamadas
a=multiplicar(4,85);
b=dividir(64,32);
let r3=sumar2();
console.log(r3);