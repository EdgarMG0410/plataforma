import { Button } from '../../auth/components/Button'
import '../styles/UserProfile.scss'

export const UserProfile = () => {
  return (
    <div className="UserProfile">
        <div className='image'>
            <div className='box'></div>
        </div>
        <div className='profile'>
            <h2>Edgar Mancillas</h2>
            <p>Desarrollador Frontend</p>
            <h3>Activo</h3>
            <Button 
            style='primary'
            name='Ver mis datos'/>
        </div>
    </div>
  )
}
