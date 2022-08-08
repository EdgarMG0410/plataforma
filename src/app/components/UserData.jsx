import { Button } from '../../auth/components/Button'
import '../styles/UserData.scss';
import { DataTable } from './DataTable';

export const UserData = () => {
    return (
        <div className='UserData'>
            <div className='buttons'>
                <Button style='primary' name='Agregar Usuario'/>
                <Button style='secondary' name='Editar Usuario'/>
                <Button style='red' name='Eliminar Usuario'/>
            </div>
            <div className='table'>
                <DataTable
                autoPageSize/>
            </div>
        </div>
    )
}
