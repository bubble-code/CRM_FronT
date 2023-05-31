import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ArticulosPage from '../pages/Articulos/Articulos';
import PresupuestoPage from '../pages/Presupuesto/Presupuesto';
import CalidadPage from '../pages/Calidad/CalidadPAge';


const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'articulos',
                element: <ArticulosPage />
            },
            {
                path: 'presupuesto',
                element: <PresupuestoPage />
            },
            {
                path: 'calidad',
                element: <CalidadPage />
            }
        ]
    }
])

export default routers;