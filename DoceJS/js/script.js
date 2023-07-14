window.addEventListener("load",function() {
   let d= new Date();
   this.document.querySelector("#fecha").innerHTML=d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear() ;
   this.document.querySelector("#hora").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

   let fNacimiento=new Date(1992,05,08,21,00);
   this.document.querySelector("#fNaci").innerHTML=fNacimiento;
   this.document.querySelector("#fcorta").innerHTML=fNacimiento.toLocaleDateString()+" "+fNacimiento.getHours();

   /*
   Existe en la programación dos palabras en ingles que repesentan la acción que hara el metoso:
   - get -> recupera o muestra el valor
   - set -> asigna
   
   */
  fNacimiento.setHours(10);
  this.document.querySelector("#fcorta2").innerHTML=fNacimiento.toLocaleDateString()+" "+fNacimiento.getHours(3);


  /*Operaciones con fechas*/
  let beaM= new Date ("1998-7-3");
  let beaL= new Date ("1992-5-8");

  /*Se compara fecha*/ 

  if (beaM<beaL){
    console.log("La mayor es Bea Mena");
  }else{
    console.log("La mayor es Bea López");
  }

console.log(beaL.getFullYear()+67);

//primero calcular edad actual
//edad jubile 67
  let hoy=new Date()
  let edadActualBeaL=hoy.getFullYear()-beaL.getFullYear();
  console.log(edadActualBeaL);
  //
  let edadJubBeaL=67-edadActualBeaL;
  console.log(edadJubBeaL);
  let fechaJubile=hoy.getFullYear()+edadJubBeaL;
  console.log(fechaJubile);

 let boton=this.document.querySelector("#boton");
 boton.addEventListener("click",function(){
    //let fechaInp=document.querySelector("#fechaInp").value;
   
   // console.log(fechaInp);
   // console.log(typeof(fechaInp));
    //let fechaForm=new Date (fechaInp); l
    let fechaInp=new Date (document.querySelector("#fechaInp").value);// ojo-> aqui solo se utiliaza una sola variable
    console.log(fechaInp.toLocaleDateString());
 });

   
});