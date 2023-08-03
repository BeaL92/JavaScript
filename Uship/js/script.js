window.addEventListener("load",()=>{
    let peso=document.getElementById("peso").value;
    let destino=document.getElementById("destino").value;
    let resultado=document.getElementById("resultado")
    function calcular(){
        if(validarDatos(resultado)){
            calcularPrecio(resultado);
        }

        function calcularPrecio(resultado){
            if(peso<0 && peso>=0.5){
                valor=(2.88+destino).toFixed(2);
            }
            if(peso<0.5 && peso>=5){
                valor=(4.75+destino).toFixed(2);
            }
            if(peso<=5 && peso>=10){
                valor=(6.49+destino).toFixed(2);
            }
            if(peso<10 && peso>=20){
                valor=(9.39+destino).toFixed(2);
            }else{
                document.getElementById("resultado").innerHTML="Te va a costar "+valor+ "€"
            }
        }
       

    }
})