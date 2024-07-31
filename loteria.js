async function cartasLoteria() {
    const response = await fetch('cartas.json');
    const cartas = await response.json();
    return cartas;
}


function tablaLoteria(cartas) {
    const cartasDisponibles = [...cartas];
    const tabla = [];

    while (tabla.length < 16) {
        const index = Math.floor(Math.random() * cartasDisponibles.length);
        tabla.push(cartasDisponibles.splice(index, 1)[0]);
    }

    return tabla;
}

function generarTablasLoteria(cartas, numeroDeTablas) {
    const tablas = [];
    const combinacionesGeneradas = new Set();

    while (tablas.length < numeroDeTablas) {
        const tabla = tablaLoteria(cartas);
        const tablaString = tabla.map(carta => carta.nombre).join(',');

        if (!combinacionesGeneradas.has(tablaString)) {
            combinacionesGeneradas.add(tablaString);
            tablas.push(tabla);
        }
    }

    return tablas;
}

function loteriaTablas(tablas) {
    const contenedor = document.getElementById('container-tablas');
    contenedor.innerHTML = '';

    tablas.forEach((tabla, i) => {
        const divTabla = document.createElement('div');
        divTabla.className = 'tabla';
        divTabla.innerHTML = `<h2>Tabla ${i + 1}</h2>`;

        tabla.forEach(carta => {
            const divCarta = document.createElement('div');
            divCarta.className = 'carta';
            divCarta.innerHTML = `
                <img src="${carta.imagen}" alt="${carta.nombre}">
                <p>${carta.nombre}</p>
            `;
            divTabla.appendChild(divCarta);
        });

        contenedor.appendChild(divTabla);
    });
}

async function generar() {
    const cartas = await cartasLoteria();
    const numeroDeTablas = parseInt(document.getElementById('numero-tablas').value, 10);
    const tablasGeneradas = generarTablasLoteria(cartas, numeroDeTablas);
    loteriaTablas(tablasGeneradas);
}

document.querySelector('button').addEventListener('click', generar);