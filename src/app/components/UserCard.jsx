import { Button } from '../../auth/components/Button';
import '../styles/UserCard.scss';

export const UserCard = () => {
    return (
        <div className='data'>
            <div className='my-info'>
                <div className='photo'>
                    <div className='box'></div>
                </div>
                <h1><span>Nombre(s) :</span> Edgar Ivan</h1>
                <h1><span>Apellido Paterno :</span> Mancillas</h1>
                <h1><span>Apellido Materno :</span> Garcia</h1>
                <Button
                    style='primary'
                    name='Cambiar contrasena' />
            </div>
        </div>
    )
}
