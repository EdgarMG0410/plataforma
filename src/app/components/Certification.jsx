import { NavLink } from 'react-router-dom';
import '../styles/Certification.scss';

export const Certification = () => {
  return (
    <div className='Cert'>
        <h1>Certificaciones</h1>
        <div className='box'>
            <h2>Proximas Certificaciones</h2>
            <p>25 de agosto - Diversidad e Inclusion</p>
            <p>26 de agosto - SCRUM</p>
            <p>29 de agosto - NOM-018</p>
        </div>
        <div className='box'>
            <h2>Ultimos cursos</h2>
                <div className='item'>
                    <p>Liderazgo</p>
                    <p className='grade'>Aprobado</p>
                </div>
                <div className='item'>
                    <p>Tolerancia y respeto</p>
                    <p className='grade'>Aprobado</p>
                </div>
        </div>
        <div className='box'>
            <NavLink to='exams'>
                <h2>Ver mas</h2>
            </NavLink> 
        </div>
    </div>
  )
}
