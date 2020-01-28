function init() {
  let canvas = getCanvas();
  console.log(canvas);
}

function getCanvas() {
  return document.querySelector("canvas");
}

window.addEventListener("load", init);