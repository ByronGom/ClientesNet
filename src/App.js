import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importa los iconos de react-icons
import AddClienteModal from './components/AddClienteModal';
import UpdateClienteModal from './components/UpdateClienteModal';


const App = () => {
    const [clientes, setClientes] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedCliente, setSelectedCliente] = useState(null);

    useEffect(() => {
        fetchClientes();
    }, []);

    const fetchClientes = () => {
        axios.get('http://localhost:5014/api/Cliente')
            .then(response => {
                setClientes(response.data);
            })
            .catch(error => {
                console.error("Hubo un error al obtener los datos:", error);
            });
    };

    const handleAddCliente = (formData) => {
        axios.post('http://localhost:5014/api/Cliente', formData)
            .then(() => {
                fetchClientes();
                setShowAddModal(false);
            })
            .catch(error => {
                console.error("Hubo un error al agregar el cliente:", error);
            });
    };

    const handleEdit = (cliente) => {
        setSelectedCliente(cliente);
        setShowUpdateModal(true);
    };

    const handleUpdateCliente = (formData) => {
        axios.put(`http://localhost:5014/api/Cliente/${selectedCliente.id}`, formData)
            .then(() => {
                fetchClientes();
                setShowUpdateModal(false);
            })
            .catch(error => {
                console.error("Hubo un error al actualizar el cliente:", error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5014/api/Cliente/${id}`)
            .then(() => {
                fetchClientes();
            })
            .catch(error => {
                console.error("Hubo un error al eliminar el cliente:", error);
            });
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="text-center title">Clientes</h1>
                <Button variant="success" onClick={() => setShowAddModal(true)}>Agregar Cliente</Button>
            </div>
            <AddClienteModal
                show={showAddModal}
                handleClose={() => setShowAddModal(false)}
                handleSubmit={handleAddCliente}
            />
            {showUpdateModal && selectedCliente && (
                <UpdateClienteModal
                    show={showUpdateModal}
                    handleClose={() => setShowUpdateModal(false)}
                    cliente={selectedCliente}
                    handleSubmit={handleUpdateCliente}
                />
            )}
            <table className="table table-hover table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Identificador</th>
                        <th>Fecha Creación</th>
                        <th>Correo Electrónico</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.length > 0 ? (
                        clientes.map(cliente => (
                            <tr key={cliente.id}>
                                <td>{cliente.id}</td>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.direccion}</td>
                                <td>{cliente.telefono}</td>
                                <td>{cliente.identificador}</td>
                                <td>{cliente.fechaCreacion}</td>
                                <td>{cliente.correoElectronico}</td>
                                <td>
                                <div className="d-flex flex-column flex-md-row align-items-md-center">
    <button className="btn btn-warning me-2 mb-1 mb-md-0 btn-block btn-sm" onClick={() => handleEdit(cliente)}>
      <FaEdit className="icon icon-yellow" /> {/* Icono de edición amarillo */}
    </button>
    <button className="btn btn-danger btn-block btn-sm" onClick={() => handleDelete(cliente.id)}>
      <FaTrash className="icon icon-red" /> {/* Icono de eliminación rojo */}
    </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">No hay clientes</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default App;
