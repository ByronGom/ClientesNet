import React, { useState, useEffect } from 'react';
import clienteService from '../services/clienteService';
import './ClienteDetail.css'; // Importa el archivo CSS

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
        <div className="cliente-detail-container"> {/* Aplica una clase contenedor */}
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
