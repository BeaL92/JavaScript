/*
1. Operadores de comparación
2. Operadores Logicos - Y / O

*/

// Los operadores de comparación devuelven un resultado booleano true/false indicando 
// si la comparación se cumple o no
let x=2,y=3;
//comparar si son iguales
let resultado=(x==y);
document.getElementById("comp1").innerHTML=resultado;
//comparar si son diferentes
resultado=(x!=y);
document.getElementById("comp2").innerHTML=resultado;
// comparar si un número es mayor que otro 
resultado=(x>y);
document.getElementById("comp3").innerHTML=resultado;
// comparar si un número es mayor o igual que otro 
resultado=(x>=y);
document.getElementById("comp4").innerHTML=resultado;
// comparar si un número es menor que otro 
resultado=(x<y);
document.getElementById("comp5").innerHTML=resultado;
// comparar si un número es menor o igual que otro 
resultado=(x<=y);
document.getElementById("comp6").innerHTML=resultado;
// comparar si son iguales en contenido y en tipo de dato
let z="2"; // tipo de cadena de texto
resultado=(x===z);
document.getElementById("comp7").innerHTML=resultado;