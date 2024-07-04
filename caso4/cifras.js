function cifra() { //Declaración de función
    num = prompt("Escribe un número"); //Ingresar número
    num = Number(num);
    if (num >= 10) { //Establecer el máximo número para indicar que es de una cifra
        alert("Tu número tiene más de una cifra"); //Texto a mostrar cuando num es de más de una cifra
        document.write("<h1>Número ingresado:<br> "+num+"<br><br>Tu número tiene más de una cifra</h1>");
    }
    else {
        alert("Tu número solo tiene una cifra"); //Texto a mostrar cuando num es de una cifra
        document.write("<h1>Número ingresado:<br> "+num+"<br><br>Tu número solo tiene una cifra</h1>");
    }
}
