const vuelos = [
    { vuelo: 'AA101', destino: 'Nueva York', hora: '08:00', estado: 'Abordando', puerta: 'A1' },
    { vuelo: 'BA202', destino: 'Londres', hora: '09:30', estado: 'En Espera', puerta: 'B2' },
    { vuelo: 'AF303', destino: 'París', hora: '10:15', estado: 'Cancelado', puerta: 'C3' },
    { vuelo: 'IB404', destino: 'Madrid', hora: '11:00', estado: 'A Tiempo', puerta: 'D4' },
    { vuelo: 'LH505', destino: 'Berlín', hora: '12:30', estado: 'Retrasado', puerta: 'E5' },
    { vuelo: 'DL606', destino: 'Atlanta', hora: '13:00', estado: 'Abordando', puerta: 'F6' },
    { vuelo: 'UA707', destino: 'Chicago', hora: '14:00', estado: 'En Espera', puerta: 'G7' },
    { vuelo: 'KL808', destino: 'Ámsterdam', hora: '15:15', estado: 'Cancelado', puerta: 'H8' },
    { vuelo: 'QF909', destino: 'Sídney', hora: '16:45', estado: 'A Tiempo', puerta: 'I9' },
    { vuelo: 'ZA121', destino: 'Antofagasta', hora: '17:30', estado: 'Cancelado', puerta: 'A1' },
    { vuelo: 'BG254', destino: 'Puerto Montt', hora: '17:45', estado: 'En Espera', puerta: 'B2' },
    { vuelo: 'GH563', destino: 'Talca', hora: '18:45', estado: 'A tiempo', puerta: 'C3' },
    { vuelo: 'MN612', destino: 'París', hora: '19:30', estado: 'A Tiempo', puerta: 'D4' },
    { vuelo: 'FG895', destino: 'Londres', hora: '19:45', estado: 'Retrasado', puerta: 'E5' },
    { vuelo: 'GB108', destino: 'Billund', hora: '20:15', estado: 'A tiempo', puerta: 'F6' },
    { vuelo: 'DA132', destino: 'Punta Arenas', hora: '20:45', estado: 'En Espera', puerta: 'G7' },
    { vuelo: 'NN264', destino: 'La Paz', hora: '21:30', estado: 'Cancelado', puerta: 'H8' },
    { vuelo: 'DG112', destino: 'Montevideo', hora: '21:45', estado: 'En espera', puerta: 'I9' }
]


const tbody = document.querySelector("#tabla-vuelos");

function ColorEstado(estado) {
    switch (estado) {
        case 'Abordando':
            return 'yellow';
        case 'En Espera':
            return 'orange';
        case 'Cancelado':
            return 'red';
        case 'A Tiempo':
            return 'green';
        case 'Retrasado':
            return 'purple';
        default:
            return 'black';
    }
}


const numVuelos = 9; //9 numero de filas que tiene la tabla


//funcion para mostrar vuelos aleatoriamente

function alternaVuelos(array) { //función para mezclar vuelos aleatorios, array como parametro
    let currentIndex = array.length, randomIndex; //esta variable devuelve longitud del array, en este caso 18
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]] //se intercambia el array ordenado por el array mezclado curren por random
    }
}


//funcion para actualizar la tabla con 9 elementos en la tabla

function actualizarTabla() {
    const vuelosMezclados = [...vuelos];

    alternaVuelos(vuelosMezclados);

    const primeraPantalla = vuelosMezclados.slice(0, numVuelos);  //slice sirve para partir el array segun los parametros

    const tBody = document.getElementById('tabla-vuelos') //capturar la seccion de vuelos
    tBody.innerHTML = '';

    primeraPantalla.forEach(vuelo => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                <td>${vuelo.vuelo}</td >            
                <td>${vuelo.destino}</td>
                <td>${vuelo.hora}</td>
                <td style="color: ${ColorEstado(vuelo.estado)}">${vuelo.estado}</td>
                <td>${vuelo.puerta}</td>
                 `;
        tBody.appendChild(tr);
    });

}


setInterval(actualizarTabla, 1000)

