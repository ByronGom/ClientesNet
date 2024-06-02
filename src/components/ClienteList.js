import React, { useState, useEffect } from 'react';
import clienteService from '../services/clienteService';
import './Cliente.css'; // Importa el archivo CSS

const ClientesList = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await clienteService.getAllClientes();
        setClientes(data);
    };

    const handleEditar = (id) => {
        // Lógica para editar cliente
    };

    const handleAgregar = () => {
        // Lógica para agregar cliente
    };

    const handleEliminar = (id) => {
        // Lógica para eliminar cliente
    };

    return (
        <div className="clientes-list-container">
            <h2 class="titulo">Listado de Clientes</h2>
            <div className="table-container">
                <table className="clientes-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(cliente => (
                            <tr key={cliente.id}>
                                <td>{cliente.id}</td>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.telefono}</td>
                                <td>
                                    <button onClick={() => handleEditar(cliente.id)}>Editar</button>
                                    <button onClick={() => handleEliminar(cliente.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="boton-agregar" onClick={handleAgregar}>Agregar Cliente</button>
        </div>
    );
};

export default ClientesList;
