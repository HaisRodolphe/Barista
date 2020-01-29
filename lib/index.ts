function init() {
  let canvas = getCanvas();
  let context =getContext();
  // on détermine les dimensions du canvas
  canvas.width=640;
  canvas.height=480;
  // crée un nouveau path 
  context.beginPath();
  // on définit l'épaisseur de la ligne (unité en px)
  context.lineWidth=5;
  // on bouge vers les coordonnées x = 10 et y = 10 (sans rien dessiner)
  context.moveTo(10,10);
  // on dessine une ligne depuis notre point de départ vers le point d'arrivée (x=10,y100)
  context.lineTo(10,100);
  // on va donc définir un style de remplissage
  context.strokeStyle="#00ff00";
  // et enfin on appelle la méthode stroke, qui va se charger d'éxécuter l'ensemble 
  // des commandes que nous avons utilisé depuis que l'on invoqué beinPath()
  // si l'on commente l'appel à cette méthode, rien ne se produit. 
  // L'appel à stroke permet de fermer le chemin crée par beginPath().
  context.stroke();
}
/*
* Retourne une référence à l'objet canvas crée à l'aide de la balise 
* placée dans le code html
*/
function getContext(){
  return getCanvas().getContext("2d")
}
/*
* Retourne une référence à l'objet canvas crée à l'aide de la balise 
* placée dans le code html
*/
function getCanvas() {
  return document.querySelector("canvas");
}
/* 
* Quand toutes les données sont chargées (DOM, images, sons etc...)
* On démarre l'application par la fonction init
*/
window.addEventListener("load", init);