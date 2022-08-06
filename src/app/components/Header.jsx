import { Avatar } from '@mui/material'
import React from 'react'
import '../styles/Header.scss'
import logo from '../../assets/logo.png';
import {NavLink} from 'react-router-dom';
export const Header = () => {
    return (
        <div className='Header'>
            <NavLink to='/home'>
                <img src={logo} className='logo' />
            </NavLink>
            <p className='name'>Hola, nombre</p>
        </div>
    )
}  
