import React, { useState, useEffect } from 'react';
import clienteService from '../services/clienteService';

const ClientesList = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await clienteService.getAllClientes();
        setClientes(data);
    };

    return (
        <div>
            <h2>Listado de Clientes</h2>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>
                        {cliente.nombre} - {cliente.telefono}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientesList;
