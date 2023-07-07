window.addEventListener("load",()=>{

const y=document.querySelector("h2");// sustituye getElementByTagName
const x=document.querySelector("#intro");//sustituye getElementById
const z=document.querySelector(".intro");//sustituye getElementByClassName


// /*
// querySelector retorna el primero que encuentra

// querySelectorAll retorna un Array con todos los elementos que se encuentra*/ 

document.getElementById("demo1").innerHTML="El pimer objeto que tiene la etiqueta " +y.innerHTML;
document.getElementById("demo2").innerHTML="El pimer objeto que tiene la etiqueta" + x[0].innerHTML;
document.getElementById("demo3").innerHTML="El pimer objeto que tiene la etiqueta"+z[0].innerHTML;

/*bombilla*/ 
//leemos el boton



    
});



