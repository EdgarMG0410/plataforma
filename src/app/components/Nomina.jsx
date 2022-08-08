import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '../../auth/components/Button';
import '../styles/Nomina.scss';
export const Nomina = () => {
    return (
        <div className='Nomina'>
            <h1>Nomina</h1>
            <div className='pagos'>
                <h2>Ultimos pagos</h2>
                <div className='item'>
                    <h3>Semana 28 - 22/07/2022</h3>
                    <button>Ver</button>
                </div>
                <div className='item'>
                    <h3>Semana 29 - 29/07/2022</h3>
                    <button>Ver</button>
                </div>
                <div className='item'>
                    <h3>Semana 30 - 05/08/2022</h3>
                    <button>Ver</button>
                </div>
                <NavLink to='nomina'>
                    <div className='item'>
                        <h2>Ver mas</h2>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
