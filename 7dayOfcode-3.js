
const numeroAdivinar = Math.floor(Math.random() * 10) + 1;
console.log(numeroAdivinar);
let numeroSugerido = prompt("Hola buenas, favor ingrese un numero del 1 al 10")
let intentos = 1;

while (numeroSugerido != numeroAdivinar) {
    numeroSugerido = prompt (`Me indicas un número diferente por favor, llevas ${intentos} ${intentos == 1 ? "intento" : "intentos"} fallidos`)
    numeroSugerido = Number(numeroSugerido);
    
    console.log(numeroSugerido);
    intentos++; 

if (numeroSugerido == numeroAdivinar) {
    
        alert(`Que bien, si era el número ${numeroAdivinar} que indicaste`)
        break;}
}





 







