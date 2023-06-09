function calculoDni(){
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let numero= parseInt(document.getElementById("dni").value);
let calLetra=numero%23;
let letra=letras[calLetra];  
document.getElementById("resultado").innerHTML=numero+"-"+letra;
}

