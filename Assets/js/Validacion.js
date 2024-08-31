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


const destinoSelect = document.getElementById('destino-select');
const vueloInput = document.getElementById('vuelo')

vuelos.forEach(vuelo => {
    const option = document.createElement('option');
    option.value = vuelo.destino;
    option.textContent = vuelo.destino;
    destinoSelect.appendChild(option)
});

destinoSelect.addEventListener('change', (event) => {
    const selectedDestino = event.target.value
    const selectedVuelo= vuelos.find(vuelo => vuelo.destino === selectedDestino);
    if (selectedVuelo) {
        vueloInput.value = selectedVuelo.vuelo
        
    }
})