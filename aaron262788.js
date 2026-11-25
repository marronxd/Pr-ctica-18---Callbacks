/*
function saludo(nombre, callback) {
    console.log(`Hola ${nombre}`);
    setTimeout(() => {
        callback();
    }, 2000);
}

saludo("maruchan", () => {
    console.log("El saludo ya se realizó");

    setTimeout(() => {
        finalizar();
    }, 2000);
});

function finalizar() {
    console.log("Finn jeje jake");
}*/


// PRACTICA  18 CALLBACKS

function principal(callback){
    console.log("Ejercicio 1");
    setTimeout( () => {
        callback();

    }, 3000);
}
 // este es el callback de principal
principal(()=>{
    console.log("Yay felicidades cumpliste el ejercicio 1.");
});


// sirve para las operaciones matemáticas
function principal_2(numero1, numero2, callback){
    console.log("Resultado de la operación con esos numeros")
    callback(numero1, numero2);
}

// los callbacks llaman a un método auxiliar (si así puede llamarse)
//  que se encarga de hacer la operación correspondiente

// este es el callback
principal_2(1, 4, (a,b) =>{
    suma(a,b);
});

// este es el callback
principal_2(1, 4, (a,b) =>{
    resta(a,b);
});

// este es el callback
principal_2(1, 4, (a,b) =>{
    multiplicacion(a,b);
});

// este es el callback
principal_2(1, 4, (a,b) =>{
    division(a,b);
});

function suma(numero1, numero2){
    console.log(numero1 + numero2)
}
function resta(numero1, numero2){
    console.log(numero1 - numero2)
}
function multiplicacion(numero1, numero2){
    console.log(numero1 * numero2)
}
function division(numero1, numero2){
    console.log(numero1 / numero2)
}



// ejercicio 3

function cortarIngredientes(callback){
    console.log("ingredientes cortados");
    setTimeout(()=>{
        callback();
    }, 2000);
}

// aqui como cocinar necesita un callback, llama a servir plato
cortarIngredientes(()=>{
    cocinar(()=>{
        servirPlato();
    });
});

function cocinar(callback){
    console.log("cocinando");
    setTimeout(()=>{
        callback();
    },2000);
}

// ya no le puse porque es lo último que se ejecuta
function servirPlato() {
    setTimeout(() => {
        console.log("Plato servido");
    }, 2000);
}
