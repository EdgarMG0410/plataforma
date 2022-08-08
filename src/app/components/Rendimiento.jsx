import { Button } from '../../auth/components/Button';
import '../styles/Rendimiento.scss';

export const Rendimiento = () => {
    return (
        <div className='Rendimiento'>
            <h3>Tu rendimiento actual:</h3>
            <h1>78%</h1>
            <h3>15 de 19 tareas completadas</h3>
            <div className='btn'>
                <Button
                    name='Ver detalles'
                    style='primary'
                />
            </div>

        </div>
    )
}
