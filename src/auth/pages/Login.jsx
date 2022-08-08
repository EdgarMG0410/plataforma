import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Input, Info, Button } from "../components";
import logo from "../../assets/logo.png";
import "../styles/Login.scss"

export const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState({ usuario: '', contrasena: '' })
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/', {
      replace: true
    });
  }
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value,
    })
  }

  return (
    <div className="Login">
      <img className="logo" src={logo} alt="logo"/>
      <div className="box">
      <h1>Inicia sesion</h1>
        <form>
          <Input 
            name="Usuario"
            tipo="text"
            />
          <Input 
            name="Contraseña"
            tipo="password"/>
          <Button
            onClick = {onSubmit}  
            name="Entrar"
            style="primary"/>
          </form>
      </div>
      <Info/>
    </div>
  )
}
