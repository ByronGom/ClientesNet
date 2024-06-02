import React, { useState, useEffect } from 'react';
import clienteService from '../services/clienteService';

const ClienteDetail = ({ id }) => {
    const [cliente, setCliente] = useState(null);

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        const data = await clienteService.getClienteById(id);
        setCliente(data);
    };

    return (
        <div>
            {cliente ? (
                <div>
                    <h2>Detalles del Cliente</h2>
                    <p>Nombre: {cliente.nombre}</p>
                    <p>Dirección: {cliente.direccion}</p>
                    <p>Teléfono: {cliente.telefono}</p>
                    {/* Agregar más campos según sea necesario */}
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ClienteDetail;
