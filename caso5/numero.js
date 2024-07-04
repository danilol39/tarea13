function numero() { //Declaración de función
    num = prompt("Escribe un número del 10 al 20"); //Ingresar número
    num = Number(num);
    if (num <= 10 || num >= 20) { //Establecer el minimo y máximo número para indicar si el número es valido
        alert("Este número no es valido"); //Texto a mostrar cuando num es valido
        document.write("<h1>ESTE NÚMERO NO ES VALIDO</h1>");
    }
    else {
        alert("El número es correcto"); //Texto a mostrar cuando num no es valido
        document.write("<h1>Número ingresado:<br> "+num+"<br>El número es correcto</h1>");
    }
}
