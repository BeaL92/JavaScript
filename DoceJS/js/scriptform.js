/*
Script para validar el formulario y darle dinamismo
 */
window.addEventListener("load",function(){
let formPago=document.querySelectorAll("input[name='fPago']");
let divFormTC=document.querySelector("#formTC");
let divFormPP=document.querySelector("#formPP");
let divFormB=document.querySelector("#formB");
for(let i=0;i<2;i++){
formPago[i].addEventListener("change",function(){
divFormTC.style.display="block";
divFormPP.style.display="none";
divFormB.style.display="none";

})

formPago[2].addEventListener("change",function(){
divFormPP.style.display="block";
divFormTC.style.display="none";
divFormB.style.display="none";

})
formPago[3].addEventListener("change",function(){
divFormB.style.display="block";
divFormTC.style.display="none";
divFormPP.style.display="none";
})
let miInput=this.document.querySelector("#form");
console.log(form);
miInput[0].addEventListener("input",()=>{
//vamos a quitar el mensaje mientras escribe
miInput[0].setCustomValidity('');
miInput[0].checkValidity();
})
//Mostrar el mensaje de verificación
miInput[0].addEventListener("invalid",()=>{
    miInput[0].style.backgroundColor="red";
    miInput[0].setCustomValidity("Indica el nombre, por favor")
})
miInput[2].addEventListener("input",()=>{
    let hoy=new Date;
    let fVista=new Date(miInput[2].value)
    console.log(fVista);
    if (fVista[2].getMoth()<hoy.getMonth() && fVista.getFullYear()<hoy.getFullYear()){
        miInput[2].setCustomValidity("Debe ser una fecha mayor que hoy")
    }
})

}
});