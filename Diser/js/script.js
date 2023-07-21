alert("Nuevo Newsletter!! No te la pierdas y interate de todas nuestras novedades");
window.addEventListener("load",()=>{

let d= new Date();
this.document.querySelector("#fecha").innerHTML=d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();
this.document.querySelector("#hora").innerHTML=d.getHours()+":"+d.getMinutes();


let section=this.document.querySelector(".sectionImg");
section.addEventListener("mouseover",()=>{
    section.style.opacity="0.5";

})
section.addEventListener("mouseout", ()=>{
    section.style.opacity="1";
})

});