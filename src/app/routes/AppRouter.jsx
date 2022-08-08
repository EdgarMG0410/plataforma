import { useState } from "react";
import { Route, Routes } from "react-router"
import { Header, Sidebar } from "../components"
import { User, Nomina, Home, Details, Exams } from '../pages';
import '../styles/App.scss';

export const AppRouter = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`App ${open ? 'open' : 'close'}`}>
        <Sidebar 
          estado={open}
          />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/user" element={<User/>} />
            <Route path="/nomina" element={<Nomina/>} />
            <Route path="/exams" element={<Exams/>} />
            <Route path="/details" element={<Details/>} />
        </Routes>
    </div>
  )
}
