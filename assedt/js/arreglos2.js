

let juegos = ['Zelda', 'Mario', 'Metroid', 'Final Fantasy'];

// (.length) para saber el largo del arreglo
console.log(juegos.length);

let primero  = juegos[0];
let ultimo = juegos [ juegos.length - 1];

console.log({primero, ultimo});


// Metodo (.forEach)
juegos.forEach( (elmento, indice, arr) => {
    console.log({elmento, indice, arr});
});


// Metodo (.push) se utiliza para agregar un elemento al final del arreglo
let nuevaLongitud = juegos.push('F-zero');
console.log({nuevaLongitud, juegos});

// Metodo (.unshift) se utiliza para agregar un elemento al principio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

// Metodo (.pop) se utiliza para borrar el elemento al final del arreglo
let juegosBorrado = juegos.pop();
console.log({juegosBorrado, juegos});

// Metodo (.splice) se utiliza para borrar un elemento seleccionado en el arreglo
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

// Metodo (.splice) se utiliza para saber en que posicion del arreglo se encuentra un elemento
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});