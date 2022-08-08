import { UserCard } from '../components/UserCard';
import { UserData } from '../components/UserData';
import '../styles/User.scss';

export const User = () => {
  return (
    <div className='Content'>
      <div className="Full">
        <h1>Perfil de usuario</h1>
        <UserCard/>
        <UserData/>
      </div>
    </div>
  )
}
