import { Route, Routes } from "react-router"
import { Header, Sidebar } from "../components"
import { User, Nomina, Home, Details, Exams } from '../pages';

export const AppRouter = () => {
  return (
    <>
        <Header/>
        <Sidebar/>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/user" element={<User/>} />
            <Route path="/nomina" element={<Nomina/>} />
            <Route path="/exams" element={<Exams/>} />
            <Route path="/details" element={<Details/>} />
        </Routes>
    </>
  )
}

            