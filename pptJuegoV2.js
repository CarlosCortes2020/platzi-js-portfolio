function pptJuego() {
    var selecP1 = String(prompt("Elije una opcion: piedra | papel | tijera"));


    var selP2 = Math.floor(Math.random()*3);
    if (selP2 == 0) {
        selecP2 = "piedra";
    } else if (selP2 == 1) {
        selecP2 = "papel";
    } else {
        selecP2 = "tijera";
    }
    console.log(selecP2);


    switch (true) {
        case ((selecP1 == "piedra") && (selecP2 == "papel")):
            console.log("Ganó " + selecP2);            
            break;
        case ((selecP1 == "piedra") && (selecP2 == "tijera")):
            console.log("Ganó " + selecP1)
            break;
        case ((selecP1 == "papel") && (selecP2 == "tijera")):
            console.log("Ganó " + selecP2);           
            break;
        case ((selecP1 == "papel") && (selecP2 == "piedra")):
            console.log("Ganó " + selecP1);          
            break;
        case ((selecP1 == "tijera") && (selecP2 == "piedra")):
            console.log("Ganó " + selecP2);         
            break;
        case ((selecP1 == "tijera") && (selecP2 == "papel")):
            console.log("Ganó " + selecP1);         
            break;    
        default:
            console.log("Empate!");
            break;
    }
}
