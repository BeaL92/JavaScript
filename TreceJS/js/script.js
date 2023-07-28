window.addEventListener("load",(e)=>{
    e.preventDefault();
    let mensaje=document.querySelector("#mensaje");
    let msn="";
    let boton=document.querySelector(".boton");
    boton.addEventListener("click",()=>{
    let nombre=document.querySelector("#nombre").value;
    console.log(nombre);

    if (nombre=="" || nombre==null){
        msn="El nombre no puede ser en blanco";
        }

    let pass=document.querySelector("#pass").value;
    console.log(pass);
    if (pass.length<8 || pass.length>12){
        msn=msn+"<br> El password no puede ser tienen menos de 8 o mas de 12 ";
    }
    mensaje.innerHTML=msn;
    
    let inputs=document.querySelectorAll(".entrada");
    inputs.forEach(items=>{
    items.addEventListener("focus",()=>{
        mensaje.innerHTML=" ";
        msn="";
    })

})
    })
    
});
