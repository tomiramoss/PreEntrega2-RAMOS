const ESPACIO = " "

let nombreUsuario = prompt("Ingrese su nombre")

let apellidoUsuario = prompt("Ingrese su Apellido")

alert ("El nombre ingresado es " + nombreUsuario + ESPACIO + apellidoUsuario )


function calculadora(numero1, operacion, numero2){
    switch(operacion){
        case "+":
        return numero1 + numero2;
        break
        case "-":
        return numero1 - numero2;
        break
        case "*":
        return numero1 * numero2;
        break
        case "/":
            if(numero2 != 0) {
                return numero1 / numero2;
            } else {
                return console.warn("No es posible dividir por 0")
            }
        break
        default:
        return 0;
        break
    }
}

function usarCalculadora() {
    let numero1 = parseFloat(prompt("Ingrese un numero"));
    let operacion = prompt("Ingrese una operacion ( + , - , * o / )");
    let numero2 = parseFloat(prompt("Ingrese un numero"));
    return alert("El resultado de la operacion es: " + calculadora(numero1, operacion, numero2))
}