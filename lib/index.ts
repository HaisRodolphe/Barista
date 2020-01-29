function init() {
  let canvas = getCanvas();
  let context =getContext();

  canvas.width=640;
  canvas.height=480;
  
  context.beginPath();
  context.lineWidth=5;
  context.moveTo(10,10);
  context.lineTo(10,100);
  context.strokeStyle="#00ff00";
  context.stroke();
}

function getContext(){
  return getCanvas().getContext("2d")
}

function getCanvas() {
  return document.querySelector("canvas");
}

window.addEventListener("load", init);