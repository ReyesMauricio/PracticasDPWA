//Funcion que trabaja como manejador de eventos
//
function init(){
    //Ingresar los datos a convertir
    var op1 = prompt('Ingrese la cantidad de metros ', '');
    if (op1<0) {
        alert("El numero ingresado es negativo, ingrese uno valido.");
        init();
    } else {
        var operaciones = document.getElementById('operaciones');
    
        var contenido = "<header>";
            contenido+= "\t<h1>Calcular</h1>\n";
        contenido+="</header>\n";

        contenido+= "<nav>";
            contenido+= "<ul>\n";
                contenido+= "\t<li>\n";
                    contenido+="\t\t <a href=\"javascript:void(0)\"><input type='button' value='Pies'></input></a>\n";
                contenido+= "\t</li>\n";
                contenido+= "\t<li>\n";
                    contenido+="\t\t <a href=\"javascript:void(0)\"><input type='button' value='Pulgadas'></input></a>\n";
                contenido+= "\t</li>\n";
                contenido+= "\t<li>\n";
                    contenido+="\t\t <a href=\"javascript:void(0)\"><input type='button' value='Yardas'></input></a>\n";
                contenido+= "\t</li>\n";
            contenido+= "</ul>\n";
        contenido+= "</nav>\n";

        operaciones.innerHTML = contenido;
        var opciones = document.getElementsByTagName('a');

        for(var i=0; i < opciones.length; i++){
            switch(i){
                case 0:
                    opciones[i].onclick=function(){
                        resultado.innerHTML="<p class=\"letterpress\">"+ op1 + " metros son equivalentes a "+(parseFloat(op1)*parseFloat(3.281))+" Pies </p>\n";
                        alert("Convertido a pies..");
                    }
                break;
                case 1:
                    opciones[i].onclick=function (){
                        resultado.innerHTML="<p class=\"letterpress\">"+ op1 + " metros son equivalentes a "+(parseFloat(op1)*parseFloat(39.37))+" Pulgadas </p>\n";
                        alert("Convertido a pulgadas..");
                    }
                break;
                case 2:
                    opciones[i].onclick=function(){
                        resultado.innerHTML="<p class=\"letterpress\">"+ op1 + " metros son equivalentes a "+(parseFloat(op1)*parseFloat(1.094))+" Yardas </p>\n";
                        alert("Convertido a yardas..");
                    }
                break;
            }
        }
    }  
}
window.onload = init();