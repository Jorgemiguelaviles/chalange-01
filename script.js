let cod=document.querySelector("#cod");
let dec=document.querySelector("#dec");
let cop=document.querySelector("#cop");
let texto= document.querySelector("#ta1");


  








function codificar(){
let valor=""
let texto= document.querySelector("#ta1");
let caixa1=texto.value;
let caixa2=document.querySelector("#ta2");
let cont=texto.value.length;
let erron= document.querySelector("#erronchar");
let inicio= document.querySelector("#inicio");
let errot= document.querySelector("#errotchar");
let resultado=document.querySelector("#resultado");
  
if (cont!=0) {
  for (let i = 0; i < cont; i++) {
let fatia=caixa1.slice(i,i+1)
let teste=caixa1.charCodeAt(i)
if (teste<57 && teste>47 || teste<122 && teste>96 || teste==32) {
  if (fatia=="a") {valor+="ai"
     
  } 
else if(fatia=="e"){valor+="enter"
}
else if(fatia=="i"){valor+="ines"
}
else if(fatia=="o"){valor+="ober"
}
else if(fatia=="u"){valor+="uber"
}


else {valor+=fatia
     
  }
  let erron= document.querySelector("#erronchar");
let inicio= document.querySelector("#inicio");
let errot= document.querySelector("#errotchar");
let resultado=document.querySelector("#resultado");

erron.style.display="none"
inicio.style.display="none"
errot.style.display="none"
resultado.style.display="inline"
caixa2.value=valor
  
  
  
   
} else {let erron= document.querySelector("#erronchar");
let inicio= document.querySelector("#inicio");
let errot= document.querySelector("#errotchar");
let resultado=document.querySelector("#resultado");

erron.style.display="none"
inicio.style.display="none"
errot.style.display="inline"
resultado.style.display="none"
  
   
}

  }
  
  
   
} else {
   let erron= document.querySelector("#erronchar");
let inicio= document.querySelector("#inicio");
let errot= document.querySelector("#errotchar");
let resultado=document.querySelector("#resultado");

erron.style.display="inline"
inicio.style.display="none"
errot.style.display="none"
resultado.style.display="none"

}



  

}


  

 


  
  

  
  







function decodificar(){
let texto= document.querySelector("#ta1");
let caixa1=texto.value;
let caixa2=document.querySelector("#ta2");
let cont=texto.value.length;
if (cont==0) {
  let erron= document.querySelector("#erronchar");
let inicio= document.querySelector("#inicio");
let errot= document.querySelector("#errotchar");
let resultado=document.querySelector("#resultado");

erron.style.display="inline"
inicio.style.display="none"
errot.style.display="none"
resultado.style.display="none"
   
} else {
  for (let i = 0; i < cont; i++) {
    let fatia=caixa1.slice(i,i+1)
     ;
    let teste=caixa1.charCodeAt(i);
 if( teste<57 && teste>47 || teste<122 && teste>96  ){
                  

        caixa1= caixa1.replaceAll("ai","a");
        caixa1= caixa1.replaceAll("enter","e");
        caixa1= caixa1.replaceAll("ines","i");
        caixa1= caixa1.replaceAll("ober","o");
        caixa1=  caixa1.replaceAll("uber","u" );}

      
        
          }
  let erron= document.querySelector("#erronchar");
let inicio= document.querySelector("#inicio");
let errot= document.querySelector("#errotchar");
let resultado=document.querySelector("#resultado");

erron.style.display="none"
inicio.style.display="none"
errot.style.display="none"
resultado.style.display="inline"
caixa2.value=caixa1
 
}
     
  
   
}


     
  











function copiar(){

let caixa2=document.querySelector("#ta2");
  navigator.clipboard.writeText(caixa2.value)
  
}



cod.addEventListener('click',codificar)
dec.addEventListener('click',decodificar)
cop.addEventListener('click',copiar)