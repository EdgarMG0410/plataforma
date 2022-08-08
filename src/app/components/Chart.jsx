import '../styles/Chart.scss';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export const Chart = () => {
    const data = [
        {name: 'Lunes', uv: 100, pv: 2400, amt: 200 }, 
        {name: 'Martes', uv: 80, pv: 200, amt: 200},
        {name: 'Miercoles', uv: 85, pv: 200, amt: 200},
        {name: 'Jueves', uv: 90, pv: 200, amt: 200},
        {name: 'Viernes', uv: 70, pv: 200, amt: 200},
        {name: 'Lunes', uv: 100, pv: 2400, amt: 200 }, 
        {name: 'Martes', uv: 60, pv: 200, amt: 200},
        {name: 'Miercoles', uv: 85, pv: 200, amt: 200},
        {name: 'Jueves', uv: 90, pv: 200, amt: 200},
        {name: 'Viernes', uv: 70, pv: 200, amt: 200}
    ];
    return (
        <div className='Chart'>
            <h2>Grafica de rendimiento</h2>
            <div className='grafica'>
                <LineChart width={750} height={350} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    )
}

