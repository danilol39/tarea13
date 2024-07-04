function escribe(num) { //Declaración de función
    var colores = ["Ninguno","Rojo","Amarillo","Verde","Azul"]; //Declaración de arreglo
    var texto = document.getElementById("respuesta") //Declaración de la variable para mostrar color
    texto.innerHTML = colores[num] //Reemplazo del elemento texto
}
