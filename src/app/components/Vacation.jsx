import { Button } from '../../auth/components/Button';
import '../styles/Vacation.scss';

export const Vacation = () => {
    return (
        <div className='Vacation'>
            <h2>Te quedan</h2>
            <h1>5 dias</h1>
            <h2>de Vacaciones</h2>
            <div className='btn'>
                <Button
                    name='Ver detalles'
                    style='primary'
                />
            </div>

        </div>
    )
}
