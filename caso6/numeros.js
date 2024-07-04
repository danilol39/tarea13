function numeros() { //Declaración de función
    var i = 1; //Declaración de variables
    var par = 0;
    var impar = -1;
    do {
        par += 2; //Los datos pares e impares se sumaran de 2 en 2
        impar += 2;
        if (i <= 10) {
            document.getElementById("par").innerHTML += par + "<br>"; //Imprimir los datos pares
            document.getElementById("impar").innerHTML += impar + "<br>"; //Imprimir los datos impares
        }
        document.getElementById("enteros").innerHTML += i + "<br>"; //Imprimir los datos enteros
        i++;
    } while (i <= 20); //Establecer el número máximo a mostrar
}


