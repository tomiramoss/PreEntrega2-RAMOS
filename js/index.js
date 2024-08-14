// const ESPACIO = " "

// let nombreUsuario = prompt("Ingrese su nombre completo")

// alert ("El nombre ingresado es " + nombreUsuario )


// function calculadora(numero1, operacion, numero2){
//     switch(operacion){
//         case "+":
//         return numero1 + numero2;
//         break
//         case "-":
//         return numero1 - numero2;
//         break
//         case "*":
//         return numero1 * numero2;
//         break
//         case "/":
//             if(numero2 != 0) {
//                 return numero1 / numero2;
//             } else {
//                 return console.warn("No es posible dividir por 0")
//             }
//         break
//         default:
//         return 0;
//         break
//     }
// }

// function usarCalculadora() {
//     let numero1 = parseFloat(prompt("Ingrese un numero"));
//     let operacion = prompt("Ingrese una operacion ( + , - , * o / )");
//     let numero2 = parseFloat(prompt("Ingrese un numero"));
//     return alert("El resultado de la operacion es: " + calculadora(numero1, operacion, numero2))
// }

// function calcularIVA(precio) {
//     const tasaIva = 0.21;
//     const iva = precio * tasaIva;
//     const precioFinal = precio + iva;
//     return precioFinal;
// }

// function precioConIva(precio) {
//     const precio = parseFloat(prompt("Ingrese el precio del producto:"));
//     const precioFinal = calcularIVA(precio);
// alert("El precio total con IVA es: " + precioFinal);
// }

function Producto (nombre, categoria, precio) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.precioFinal = function () {
        this.precio = precio * 1.21 ;
    }
}

const mother1 = new Producto("Mother Asrock Z390 Phantom Gaming", "Mothers" , 74900)
console.log(mother1)
mother1.precioFinal()

const mother2 = new Producto("Mother Asrock H510M-HDV/M.2 SE S1200", "Mothers" , 75700)
console.log(mother2)
mother2.precioFinal()


const mother3 = new Producto("Mother Asrock H610M-HVS S1700 ", "Mothers" , 75800)
console.log(mother3)
mother3.precioFinal()


const procesador1 = new Producto("Intel Core i3 12100 ", "Procesadores" , 150730)
console.log(procesador1)
procesador1.precioFinal()

const procesador2 = new Producto("Intel Core i5 12400F", "Procesadores" , 169000)
console.log(procesador2)
procesador2.precioFinal()

const procesador3 = new Producto("Intel Core i7 12700F", "Procesadores" , 360640)
console.log(procesador3)
procesador3.precioFinal()

const grafica1 = new Producto("GeForce RTX 3050 6GB GDDR6", "Graficas" , 263520)
console.log(grafica1)
grafica1.precioFinal()

const grafica2 = new Producto("GeForce RTX 3060 12GB GDDR6", "Graficas" , 419810)
console.log(grafica2)
grafica2.precioFinal()

const grafica3 = new Producto("GeForce RTX 4060 8GB GDDR6", "Graficas" , 437900)
console.log(grafica3)
grafica3.precioFinal()

const mothers = ["Asrock Z390", "Asrock H510M", "Asrock H610M"]
console.log("Hay " + mothers.length + " mothers en Stock")

const procesadores = ["i3 12100", "i5 12400F", "i7 12700F"]
console.log("Hay " + procesadores.length + " procesadores en Stock")

const graficas = ["GeForce RTX 3050", "GeForce RTX 3060", "GeForce RTX 4060"]
console.log("Hay " + graficas.length + " graficas en Stock")

mothers.push("Asrock B660M")
console.log("Hay " + mothers.length + " mothers en stock ahora")

mothers.pop()
console.log(mothers)

// Unshift para agregar al inicio del array y shift para sacar el primero
// En el splice el primer parametro hace referencia al inicio de donde se empieza a borrar y el segundo parametro, a cuantos numeros quiero borrar

