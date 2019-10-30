/* if(condicion){
    comandos...
} else {
    otro comsndo que se cumpla en caso contrario 
}

para anidar se usa else if 

if(condicion) {
    comandos...
} else if (condicion) {
    otro comsndo que se cumpla en caso contrario 
} */

/* let edad = 18;

if (edad === 18) {
    console.log ("Eres mayor de edad")
} else {
    console.log ("No eres mayor de edad")
}

let numero = prompt ("ingresa un numero")

if (numero % 2 === 0) { 
    console.log ("Numero par")
} else {
    console.log ("Numero Impar")
} */

/* let dia = 0;

if (dia === 0) {
    console.log ("lunes")
} else if (diaa === 1) {
    console.log ("martes")
} else if (diaa === 2) {
    console.log ("miércoles")
}else if (diaa === 3) {
    console.log ("jueves")
}else if (diaa === 4) {
    console.log ("viernes")
}else if (diaa === 5) {
    console.log ("sábado")
} else if (diaa === 6) {
    console.log ("viernes")
} else {
    console.log ("día invalido")
}
 */

/* 
let edad = prompt ("¿Cuál es tu edad?")

if (edad <= 15) {
    console.log ("No puedes conducir")
} else if (edad == 16 || edad == 17) {
    console.log ("Puedes conducir con permiso")
} else if (edad >= 18 && edad <=64) {
    console.log ("Conduce con licencia")
} else if (edad >= 65) {
    console.log ("Muy anciano para conducir")
} else {
    console.log ("valor invalido")
}
 */

/* 
let jugador1 = prompt ("¿piedra, papel o tijera?").toLowerCase();
let jugador2 = prompt ("¿piedra, papel o tijera?").toLowerCase();

if (jugador1 == "piedra" && jugador2 == "tijera" ) {
    console.log ("Gana jugador 1")
} else if (jugador1 == "piedra"  && jugador2 == "piedra"  ) {
     console.log ("Empate") 
} else if (jugador1 == "piedra" && jugador2 == "papel" ) {
     console.log ("Gana jugador 2")
} else if (jugador1 == "papel" && jugador2 == "piedra" ) {
     console.log ("Gana jugador 1")
} else if (jugador1 == "papel" && jugador2 == "tijera" ) {
     console.log ("Gana jugador 2")
} else if (jugador1 == "papel" && jugador2 == "papel" ) {
     console.log ("Empate")
}  else if (jugador1 == "tijera" && jugador2 == "piedra" ) {
    console.log ("Gana jugador 2")
} else if (jugador1 == "tijera" && jugador2 == "tijera" ) {
    console.log ("Empate")
} else if (jugador1 == "tijera" && jugador2 == "papel" ) {
    console.log ("Gana jugador 1")
} else {
    console.log ("escribe en bien, por fa!")
} */

let password = prompt ("Escribe tu password")

if (password === "perritoSalchicha123") {
    console.log ("Entraste, contraseña correcta")
} else {
    console.error ("vuelve a intentar")
}