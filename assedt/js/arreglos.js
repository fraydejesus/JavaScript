

let videoJuegos = ['Mario', 'Megaman', 'Final Fantasy'];
console.log(videoJuegos);

// para llamar una de las opcciones del arreglo
console.log(videoJuegos[0]);

// los arreglos pueden contener cualquier dato

let arregloCosas = [
    true,
    123,
    'fray',
    1+2,
    function(){},
    ()=>{},
    {a:1},
    ['X', 'Megaman', 'Zero', 'Dr. Light',[
        'Dr. Willy',
        'Woodman'
    ]]
];

//console.log({arregloCosas});

//console.log(arregloCosas[2]);

// para buscar dentro de un arreglo

console.log(arregloCosas[7] [4] [1]);
