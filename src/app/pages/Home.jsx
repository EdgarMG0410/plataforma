import "../../index.scss"
import { Calendario } from "../components/Calendario"
import { Certification } from "../components/Certification"
import { Chart } from "../components/Chart"
import { Nomina } from "../components/Nomina"
import { Rendimiento } from "../components/Rendimiento"
import { UserProfile } from "../components/UserProfile"
import { Vacation } from "../components/Vacation"

export const Home = () => {
  return (
    <>
    <div className='Content'>
        <h1>Bienvenido!</h1>
        <UserProfile/>
        <Vacation/>
        <Rendimiento/>
        <Chart/>
        <Calendario/>
        <Nomina/>
        <Certification/>
    </div>
    </>
  )
}
