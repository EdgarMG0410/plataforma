import { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Sidebar.scss';
import user from '../../assets/usuario.png';
import nomina from '../../assets/nomina.png';
import exam from '../../assets/exam.png';
import menu from '../../assets/menu.png';
import cancel from '../../assets/cancel.png';
import logout from '../../assets/sesion.png';



export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState("SidebarClose");
  const handleOpen = () => {
    setOpen(true);
    setStyle("SidebarOpen");
  }
  const handleClose = () => {
    setOpen(false);
    setStyle("SidebarClose");
  }
  return (
    <div className={style}>
      <div className='container'>
        <div className='item'>
          {
            !open ? (
              <button onClick={handleOpen}>
                <img src={menu} />
              </button>
            ) : (
              <button onClick={handleClose}>
                <img src={cancel} />
              </button>
            )
          }

        </div>
        <NavLink to="/user">
          <div className='item'>
            <img src={user} />
            <h2>Usuario</h2>
          </div>
        </NavLink>
        <NavLink to="/nomina">
          <div className='item'>
            <img src={nomina} />
            <h2>Nomina</h2>
          </div>
        </NavLink>
        <NavLink to="/exams">
          <div className='item'>
            <img src={exam} />
            <h2>Examenes</h2>
          </div>
        </NavLink>
      </div>
      <NavLink to="/login" className='logout'>
        <button >
          <img src={logout} />
        </button>
      </NavLink>
    </div>
  )
}
