import React, { useState } from 'react';
import clienteService from '../services/clienteService';

const ClienteForm = () => {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const nuevoCliente = { nombre, direccion, telefono };
        await clienteService.createCliente(nuevoCliente);
        // Limpiar los campos del formulario después de crear un cliente
        setNombre('');
        setDireccion('');
        setTelefono('');
    };

    return (
        <div>
            <h2>Crear Nuevo Cliente</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Dirección"
                    value={direccion}
                    onChange={e => setDireccion(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                />
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default ClienteForm;
