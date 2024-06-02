const clientes = [
    { id: 1, nombre: 'Cliente 1', direccion: 'Dirección 1', telefono: '123456789' },
    { id: 2, nombre: 'Cliente 2', direccion: 'Dirección 2', telefono: '987654321' },
    // Agrega más clientes si es necesario
];

const clienteService = {
    getAllClientes: () => {
        // Simulación de una llamada a una API para obtener todos los clientes
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(clientes);
            }, 1000); // Simular un retardo de 1 segundo
        });
    },
    getClienteById: (id) => {
        // Simulación de una llamada a una API para obtener los detalles de un cliente por su ID
        return new Promise(resolve => {
            setTimeout(() => {
                const cliente = clientes.find(c => c.id === parseInt(id));
                resolve(cliente);
            }, 500); // Simular un retardo de 0.5 segundos
        });
    },
    createCliente: (nuevoCliente) => {
        // Simulación de una llamada a una API para crear un nuevo cliente
        return new Promise(resolve => {
            setTimeout(() => {
                const id = clientes.length + 1; // Simulación de generación de ID
                const clienteConId = { ...nuevoCliente, id };
                clientes.push(clienteConId);
                resolve(clienteConId);
            }, 500); // Simular un retardo de 0.5 segundos
        });
    }
};

export default clienteService;