// //comprobar si esta bien linkeada

// //alert(hola');
// //var numero

// let numero=10;
// //valor strig o texto
// let texto= "Ricardo"
// let texto2= 'Ricardo2'

// //valor booleano https://eloquentjavascript.net/

// let verdadero= true
// let falso= false


// //objeto
// let objet= { }
// //arreglo
// let array=  { }

// //--------------->

// let x = 100;
// let y = 50;

// let suma = x + y 
// console.log( x + y );

// console.log(suma)

// //+ - * / % 

// let cambiar = 1500
// console.log (cambiar)

// cambiar = 10

// //Arrays
// let frutas = ["melon","sandia","fresa"]
// console.log (frutas[1])

// frutas[3] = "manzana"
// console.log(frutas)

// frutas.push ("guayaba")

// // frutas.pop()

// frutas.splice (1,2)
// console.log(frutas)


// //object

// let persona = {
//     nombre : "ricardo",
//     direccion :  "azcapo",
//     telefono : "5515114888",
//     email : "ricardo.dev@dadsasdas",
//     edad: "21",
//     trabajos : ["dev :f", "developer","mami"],
//     mascolas : {
//         perrito: "Salchicha",
//         gatito : "siames",
//         pez : "dorado",
//     }

// }

// //console.log (persona.nombre)

// console.log (persona)

/* let name=
name = prompt ("cual es el nombre de la persona?");
console.log("nombre: " + name)
age = prompt ("cual es la edad de la persona");
console.log("edad: " + age);
tel = prompt ("cual es la edad de la telefono");
console.log("telefono: " + tel);
 */


// ejercicio 1

//  let nombre = prompt ("ingresa tu nombre");
//  let edad = prompt("ingresa tu edad");
//  let tel= ("ingresa tu celular");

// console.log ("nombre: " + nombre);
// console.log ("edad: " + edad);
// console.log ("telefono: " + tel); 

let fecha = prompt( "ingresa tu año de nacimiento)");

// console-log (typeof (fecha))

//let anio = number (fecha)
// console.log (typeof (anio))

let anioActual = 2019;
 console.log(anioActual - fecha);


 let persona = {
    nombre : "Diana",
    direccion :  "Av. tlahuac 1577 U. H. Mirasoles, condominio 15 casas 28",
    telefono : "5512641194",
    peliculas: { 
        Terror: ["el aro", "el rito", "la monja"],
        Comedia: ["son como niños", "¿qué paso ayer?", "otra"],
        musical: ["chicago", "los miserables", "camp rock"],
    },
    mascolas : {
        perros: ["Yin", "Yan"],
        gato: ["Luna", "bolita"],
    }, 
    generoMusical: {
        perreo: ["maluma", "jvalbin", "sebastián Yatra"],
        baladitas: ["Andres Cepeda", ]

    }
}