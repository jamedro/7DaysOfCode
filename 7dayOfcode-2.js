// Version: 1.0
let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let estudios = prompt("Ingrese que lenguaje de programación estudia actualmente");
let datosCompletos = `Hola ${nombre}, Tienes ${edad} años, y estas aprendiendo ${estudios}`;
alert(datosCompletos);

let teGusta = `Te gusta estudiar ${estudios}?`;	
alert(teGusta);   

let respuesta = prompt("Responde con 1 para Si, ó 2 para No");
if (respuesta == 1) {
  alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
} else {    
  alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
}   

let despedida = `¡Hasta luego ${nombre}!`;
alert(despedida);

// Output:
// Hola Juan, Tienes 25 años, y estas aprendiendo JavaScript    
// Te gusta estudiar JavaScript?
// Responde con 1 para Si, ó 2 para No
// 1
// ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
// ¡Hasta luego Juan!


 