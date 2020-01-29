function init() {
    let canvas = getCanvas();
    let context = getContext();

    // on détermine les dimensions du canvas
    canvas.width = 640;
    canvas.height = 480;

    // sauvegarder le contexte =t1
    context.save();

    context.rotate(45 * Math.PI / 180); //on applique une rotation de 45° au repére
    context.scale(0.5, 0.5); //on définit l'echelle des futurs dessins sur l'axe des x et des y
    context.translate(10, 10); //on déplace le point de départ des futurs dessins

    // sauvegarder le contexte =t2
    context.save();

    // crée un nouveau path
    context.beginPath();
    //on vas donc définir un style de remplissage
    context.fillStyle = "blue";
    //dessiner un carrè
    context.fillRect(300, 220, 100, 100);
    //remplir le cercle
    context.fill();

    // on restaure le dernier contexte sauvegardé avec save();
    context.restore();

    //on redèfinit l'opacité des dessins qui vont suivre
    context.globalAlpha = 0.5;

    // crée un nouveau path
    context.beginPath();
    //on vas donc définir un style de remplissage
    context.fillStyle = "#ff0000";
    //dessiner un rectangle
    context.fillRect(320, 240, 100, 30);
    //remplir le cercle
    context.fill();

}
/*
 * Retourne une référence à l'objet canvas crée à l'aide de la balise
 * placée dans le code html
 */
function getContext() {
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