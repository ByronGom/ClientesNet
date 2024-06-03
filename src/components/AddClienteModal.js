import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AddClienteModal = ({ show, handleClose, handleSubmit }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        identificador: '',
        fechaCreacion: new Date(),
        correoElectronico: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleModalClose = () => {
        setFormData({
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
                <Modal.Title>Agregar Cliente</Modal.Title>
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
                        <label>Direccion</label>
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
                        <label>Telefono</label>
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
                        <label>Fecha de Creacion</label>
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
                        <label>Correo Electronico</label>
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
    <div className="mb-3"></div>
    <Button variant="secondary" onClick={handleModalClose}>Cancelar</Button>
    <Button variant="primary" type="submit">Agregar</Button>
</Modal.Footer>
                                    </form>
            </Modal.Body>
        </Modal>
    );
};

export default AddClienteModal;
