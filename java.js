var estado=0;
var cuadrito=document.getElementById("area_de_dibujo");
var papel=cuadrito.getContext("2d");
var colorcito=document.getElementById("colorcito");
var x,y;
var grosor=document.getElementById("anchoLinea");

document.addEventListener("mousemove",dibujarMouse);
document.addEventListener("mousedown",clickAbajo);
document.addEventListener("mouseup",clickArriba);

dibujarLinea("red",0,0,300,0,papel,3);
dibujarLinea("red",0,0,0,300,papel,3);
dibujarLinea("red",0,300,300,300,papel,3);
dibujarLinea("red",300,0,300,300,papel,3);


function dibujarMouse(evento){
  //aca el codigo que dibuja la linea
  if (estado==1) {//se dibuja la linea solo si el estado es 1 osea si el click esta presionado
    dibujarLinea(colorcito.value,x,y,evento.layerX-7,evento.layerY-7,papel,parseInt(grosor.value));
  }
  x=evento.layerX-7;
  y=evento.layerY-7;
}

function clickAbajo(evento){//detecta si el click esta presionado y cambia el estado a 1
    estado=1;
    console.log("holis",estado);
    x=evento.layerX-7;
    y=evento.layerY-7;
}

function clickArriba(evento){//detecta si el click se dejo de presionar y cambia el estado a 0
    estado=0;
    console.log("holis",estado);
    x=evento.layerX-7;
    y=evento.layerY-7;
}

function dibujarLinea (color,xinicial,yinicial,xfinal,yfinal, lienzo, grueso){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grueso;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
