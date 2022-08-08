import React from 'react'
import imagen from '../../assets/imagen1.png';
import '../styles/Info.scss';

export const Info = () => {
    return (
        <div className='Info'>
            <div className='text'>
                <h1>Inténtalo y fracasa, 
                pero no fracases en intentarlo.
                <hr/>
                <span>Stephen Kaggwa</span></h1>
                
            </div>
            <div className='image'>
                <img src={imagen} alt='imagen' />
            </div>
        </div>
    )
}
