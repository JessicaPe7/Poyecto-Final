let almacenar = function(){
    let numero = document.getElementsByClassName("rta"),
        arrayGuardar = [];
    for (let i = 0; i <numero.length; i++){
        arrayGuardar[i] = numero[i].value;
        console.log (numero[i].value);
    }

    let respuestas = [5, 3, 4, 8, 1, 7, 10, 6, 2, 9];
    let correctas = 0;
    let incorrectas = 0;
    for (let j = 0; j < respuestas.length; j++){
        if (respuestas[j] ==  arrayGuardar[j]){
            correctas = correctas + 1;
        }else{
            incorrectas = incorrectas + 1;
        }
    }
    resultado.textContent = "Tivuste " + correctas + " respuestas correctas, y " + incorrectas + " respuestas incorrectas.";

}

function recargar () {
    window.location.href = window.location.href;
}





