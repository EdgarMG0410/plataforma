import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendario.scss';
import 'react-calendar/dist/Calendar.css';

export const Calendario = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='Calendar'>
        <h1>Calendario</h1>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}
