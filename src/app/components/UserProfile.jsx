import { NavLink } from 'react-router-dom'
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
            <NavLink to='user'>
            <Button 
            style='primary'
            name='Ver mis datos'/>
            </NavLink>
        </div>
    </div>
  )
}
