import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const UpdateClienteModal = ({ show, handleClose, handleSubmit, cliente }) => {
    const [formData, setFormData] = useState({
        id: '',
        nombre: '',
        direccion: '',
        telefono: '',
        identificador: '',
        fechaCreacion: '',
        correoElectronico: ''
    });

    useEffect(() => {
        if (cliente) {
            setFormData({
                id: cliente.id,
                nombre: cliente.nombre,
                direccion: cliente.direccion,
                telefono: cliente.telefono,
                identificador: cliente.identificador,
                fechaCreacion: cliente.fechaCreacion,
                correoElectronico: cliente.correoElectronico
            });
        }
    }, [cliente]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleModalClose = () => {
        setFormData({
            id: '',
            nombre: '',
            direccion: '',
            telefono: '',
            identificador: '',
            fechaCreacion: new Date(),
            correoElectronico: ''
        });
        handleClose();
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData);
        handleModalClose();
    };

    return (
        <Modal show={show} onHide={handleModalClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Actualizar Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Dirección</label>
                        <input
                            type="text"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Teléfono</label>
                        <input
                            type="text"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Identificador</label>
                        <input
                            type="text"
                            name="identificador"
                            value={formData.identificador}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha de Creación</label>
                        <input
                            type="text"
                            name="fechaCreacion"
                            value={formData.fechaCreacion}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Correo Electrónico</label>
                        <input
                            type="text"
                            name="correoElectronico"
                            value={formData.correoElectronico}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>Cancelar</Button>
                    <Button variant="primary" type="submit">Actualizar</Button>
                    </Modal.Footer>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateClienteModal;
