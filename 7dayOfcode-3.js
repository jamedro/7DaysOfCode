

let numeroAdivinar = 9
let numeroSugerido = prompt("Hola buenas, favor ingrese un numero del 1 al 10")
let intentos = 0
numeroSugerido = Number(numeroSugerido);
console.log (numeroSugerido);


while (numeroSugerido != numeroAdivinar) {
    numeroSugerido = prompt ("Me indicas un númro diferente por favor")
}

if (numeroSugerido == numeroAdivinar) {
    alert(`Que bien, es el número ${numeroAdivinar} que acertaste`)
}
intentos++;






