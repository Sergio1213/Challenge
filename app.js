
//Botones
const btnEncriptar=document.getElementById("en");
const btnDesencriptar=document.getElementById("des");
const btnCopiar=document.getElementById("btn-copiar");
//Text area
const txtEncriptar=document.getElementById("txtencriptar");
const areaResultado=document.getElementById("resultado");


// Alerta js
function mostrarAlerta() {
  var alerta = document.getElementById("alerta");
  alerta.classList.remove("oculto");
}

function cerrarAlerta() {
  var alerta = document.getElementById("alerta");
  alerta.classList.add("oculto");
}





const textoPorDefecto = "Ingrese el texto que deseas encriptar o desencriptar";
function encriptar(cadena) {
    const encriptacion = { 
      'a': 'ai',
      'e': 'enter',
      'i': 'imes',
      'o': 'ober',
      'u': 'ufat'
    };
  
    let cadenaEncriptada = '';
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i].toLowerCase();
      if (encriptacion[caracter]) {
        cadenaEncriptada += encriptacion[caracter];
      } else {
        cadenaEncriptada += caracter;
      }
    }
    return cadenaEncriptada;
  }

  function desencriptar(cadenaEncriptada) {
    const reemplazos = {
      "ai": "a",
      "enter": "e",
      "imes": "i",
      "ober": "o",
      "ufat": "u"
    };
    let cadenaDesencriptada = cadenaEncriptada;
    for (let reemplazo in reemplazos) {
      cadenaDesencriptada = cadenaDesencriptada.split(reemplazo).join(reemplazos[reemplazo]);
    }
    return cadenaDesencriptada;
  }

//Ocultar


  //Botones 
  function validarMinusculas(cadena) {
    return /^[a-z\s]+$/.test(cadena);
}

function enviarEncriptada(){
    if(txtEncriptar.value.trim()===""){
      alert("Por favor ingresa un texto");
    }else if(validarMinusculas(txtEncriptar.value)==false){
      alert("por favor ingresa solo minusculas");
    }else{
      const input=txtEncriptar.value;
      const cadenaEncriptada=encriptar(input);
      areaResultado.value=cadenaEncriptada;
      document.getElementById("imagen").style.display="none";
      document.getElementById("pie-imagen").style.display="none";
      btnCopiar.hidden=false;

    }
   
}


function copiar(){
  areaResultado.select();
  document.execCommand("copy");
 
  areaResultado.value=textoPorDefecto;
  txtEncriptar.value="";
  txtEncriptar.focus();

//media query


  const mediaQuery=window.matchMedia('(max-width: 768px)')
  
if(mediaQuery.matches){
  document.getElementById("imagen").style.display="none";
  document.getElementById("pie-imagen").style.display="none";
}else{
  document.getElementById("imagen").style.display="block";
  document.getElementById("pie-imagen").style.display="block"; 
}

  btnCopiar.hidden=true;
  mostrarAlerta();

}

function enviarDesencriptada(){
  if(txtEncriptar.value.trim()===""){
    alert("Por favor ingresa un texto");
  }else if(validarMinusculas(txtEncriptar.value)==false){
    alert("por favor ingresa solo minusculas");
  }else{
    const input=txtEncriptar.value;
    const  cadenaDesencriptada=desencriptar(input);
    areaResultado.value= cadenaDesencriptada;
    document.getElementById("imagen").style.display="none";
    document.getElementById("pie-imagen").style.display="none";
    btnCopiar.hidden=false;

  }


}

btnCopiar.onclick=function(){
  copiar();
}
btnEncriptar.addEventListener('click',enviarEncriptada);
btnDesencriptar.addEventListener('click',enviarDesencriptada)
