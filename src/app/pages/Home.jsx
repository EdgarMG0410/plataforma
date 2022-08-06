import React from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/Home.scss";
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: '10px',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 1,
    p: 4,
};

export const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [datos, setDatos] = useState([]);
    const [user, setUser] = useState(`http://localhost:8092/api/Usuario/{id}`);

    useEffect(() => {
        fetch('http://localhost:8092/api/Usuario')
            .then(response => response.json())
            .then(
                (datos) => {
                    setDatos(datos);
                }
            )
        console.log(datos);
    }, []);
    const handleDetails = (user) => {
    }
    return (
        <>
            <div className='Home'>
                <div className='datos'>
                    <h2> Aqui veras todos los datos de tus usuarios</h2>
                    <table className='table'>
                        <tr>
                            <td>Clave</td>
                            <td>Usuario</td>
                            <td>Contrasena</td>
                            <td>Nombre</td>
                            <td>Apellido Paterno</td>
                            <td>Apellido Materno</td>
                            <td>Detalles</td>
                            <td>Borrar</td>
                        </tr>
                        {
                            datos.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.clave}</td>
                                        <td>{item.usuario}</td>
                                        <td>{item.contrasena}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.apellidoPaterno}</td>
                                        <td>{item.apellidoMaterno}</td>
                                        <td>
                                        <NavLink to='details'>
                                            <button
                                                className='view'
                                                onClick={handleDetails(item.id)}
                                            >
                                                Ver
                                            </button>
                                        </NavLink>  
                                        </td>
                                        <td><button
                                            className='delete'
                                            onClick={handleOpen}>
                                            Eliminar
                                        </button>
                                            <Modal
                                                hideBackdrop
                                                open={open}
                                                onClose={handleClose}>
                                                <Box sx={style}>
                                                    <div className='modal'>
                                                        <h3>`Eliminar usuario ${item.usuario} ${item.apellidoPaterno}`</h3>
                                                        <div className='btns'>
                                                        <button className='delete' onClick={handleClose}>Confirmar</button>
                                                        ￼                            <button className='view' onClick={handleClose}>Cancelar</button>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </Modal>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>

        </>
    )
}
