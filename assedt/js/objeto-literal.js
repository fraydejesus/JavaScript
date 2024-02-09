

let personaje = {
    nombre: 'Fray De Jesus',
    codeName: 'power',
    edad: 38,
    vivo: true,
    coordenadas: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },

    'Ultima-pelicula': 'Infinity War'
};

console.log(personaje);
//console.log('nombre', personaje.nombre);
console.log('nombre', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Latitud', personaje.coordenadas.lat);
console.log('Longitud', personaje.coordenadas.lng);

console.log('Cantidad de Trajes:', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo';
console.log('vivo:', personaje[x]);
console.log('Ultima-pelicula:', personaje["Ultima-pelicula"]);


// MAS DETALLES

// para eliminar alguna propiedad
delete personaje.edad;
console.log(personaje);




const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// para evitsar modificaciones 
Object.freeze(personaje);