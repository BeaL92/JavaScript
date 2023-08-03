let imagenes=document.querySelectorAll(".imagen");
imagenes.forEach(items=>{
 items.addEventListener("mouseover",()=>{
        items.style.width="55%";
    });
    items.addEventListener("mouseout",()=>{
        items.style.width="auto";
    });
})