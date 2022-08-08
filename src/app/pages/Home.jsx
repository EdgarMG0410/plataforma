import "../../index.scss"
import { Chart } from "../components/Chart"
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
    </div>
    </>
  )
}
