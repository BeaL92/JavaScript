window.addEventListener("load", ()=>{
    let boton=document.querySelector("#boton");
    let imagen=document.querySelector("#imgenOculta");
    boton.addEventListener("click", ()=>{
        imagen.style.display="none";

    })
});