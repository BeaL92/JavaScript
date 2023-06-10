function calculoDni(){
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let numero= parseInt(document.getElementById("dni").value);

if (numero==""|| numero<0 || numero>99999999){
    let msnError="Indique un número valido"
    document.getElementById("msnError").innerHTML=msnError;
}else{
let calLetra=numero%23;
let letra=letras[calLetra];  
console.log(calLetra);
document.getElementById("resultado").innerHTML=numero+"-"+letra;
}
}
