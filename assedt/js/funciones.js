

// funcion tradicional
function saludar(){
    console.log('Hola Fray ');
}

// funcion tradicional con algumento
function saludar2(nombre){
    console.log('Hola ' + nombre);
}


// funcion de flecha
const holaflecha = () =>{
    console.log('hola flecha ');
}

// funcion de flecha con algumento
const holaflecha2 = (nombre) =>{
    console.log('hola flecha ' + nombre);
}

// saludar();
// saludar2('Fray De Jesus');
// holaflecha();
// holaflecha2('de Fray');


// funcion tradicional con return y algumentos
function sumar(a, b){
    return a + b;
}
console.log(sumar(1,2));


// funcion de flecha con return y algumentos
const sumar2 = (a, b) =>{
    return a + b; 
}
console.log(sumar2 (3,4));

// funcion de flecha con return resumida solo se realiza cuando la unica linea que sigue es el return (se retiran las llaves y la palabra return)
const sumar3 = (a, b) => a + b;
console.log(sumar3 (4,4));

// funcion para sacar un numero aleatorio
function getAleatorio(){
    return Math.random();
}
console.log(getAleatorio());

// funcion de flecha para sacar un numero aleatorio
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());