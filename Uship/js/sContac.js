let boton=document.querySelector("#boton");
boton.addEventListener("click", ()=>{
    let nombre=document.querySelector("#fname");
    let email=document.querySelector("#email");
    let telefono=document.querySelector("#tel");
    let mensaje=document.querySelector("#subjet")
    console.log(nombre+" "+email+" "+telefono+" "+mensaje);
    validarNombre(nombre);
    validarEmail(email);
    validarTel(tel);

    let inputs=document.querySelectorAll(".entrada");
    inputs.forEach(items=>{
        items.addEventListener("focus",()=>{
            items.style.color="black";
            items.style.background="white";
            
        })
    })
   
});

function validarNombre(nombre){
    if (nombre.value==null || nombre.value=="" || nombre.value==" "){
            nombre.style.color="white";
            nombre.style.background="pink";
            
    }

}
function validarEmail(email){
    if(email.value=="" || email.value==" "){
        email.style.color="white";
        email.style.background="pink";
    }
}
function validarTel(tel){
    if(tel.value==""|| tel.value==" "){
        tel.style.color="white";
        tel.style.background="pink";
    }
}