import { useState } from "react";
import "../styles/Login.scss";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState({ usuario: '', contrasena: '' })
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value,
    })
  }

  const onSubmit = () => {
    console.log(data)
  }
  return (
    <div className="Login">

      <div className="box">
        <form>
          <label>
            Usuario
            <input
              type="text"
              name= "usuario"
              value={data.usuario}
              onChange={handleChange} />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              name="contrasena"
              value={data.contrasena}
              onChange={handleChange} />
          </label>
          <NavLink to="/home">
          <button onClick={onSubmit}>Enviar</button>
          </NavLink>
        </form>
      </div>
    </div>
  )
}
