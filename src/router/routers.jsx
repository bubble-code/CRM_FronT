import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ArticulosPage from '../pages/Articulos/Articulos';
import ComercialPage from '../pages/Comercial/Comercial';
import CalidadPage from '../pages/Calidad/CalidadPAge';


const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'comercial',
                element: <ComercialPage />
                
            },
            {
                path: 'articulos',
                element: <ArticulosPage />
            },
            {
                path: 'calidad',
                element: <CalidadPage />
            }
        ]
    }
])

export default routers;