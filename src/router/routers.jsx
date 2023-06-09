import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ArticulosPage from '../pages/Articulos/Articulos';
import ComercialPage from '../pages/Comercial/Comercial';
import CalidadPage from '../pages/Calidad/CalidadPAge';
import CrmPage from '../pages/Crm/CrmPage';
import LogisticaPage from '../pages/LogisticaPage/LogisticaPage'
import ProyectoPage from '../pages/Proyecto/ProyectoPage'
import ProduccionPage from '../pages/Produccion/ProduccionPage'
import ConfigPage from '../pages/Config/ConfigPage';
import OfertaFabricacionPage from '../pages/OfertaFabricacion/OfertaFabricacionPage';
import { FormDatosEmpresa } from '../components/formDatosEmpresa/FormDatosEmpresa';
import { Parametros } from '../components/parametros/Parametros';
import Otros from '../pages/Otro/Otro';
import { Niveles } from '../components/Niveles/Niveles';


const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'crm',
                element: <CrmPage />

            },
            {
                path: 'logistica',
                element: <LogisticaPage />

            },
            {
                path: 'proyectos',
                element: <ProyectoPage />

            },
            {
                path: 'produccion',
                element: <ProduccionPage />

            },
            {
                path: 'calidad',
                element: <CalidadPage />
            },
            {
                path: 'config',
                element: <ConfigPage />,
                children: [
                    {
                        path: 'datosempresa',
                        element: <FormDatosEmpresa />
                    },
                    {
                        path: 'parametros',
                        element: <Parametros />
                    }
                ]
            },
            {
                path: 'of',
                element: <OfertaFabricacionPage />
            },
            {
                path: 'comercial',
                element: <ComercialPage />

            },
            {
                path: 'articulos',
                element: <ArticulosPage />
            },
            {
                path: 'otros',
                element: <Otros />,
                children: [
                    {
                        path: 'niveles',
                        element: <Niveles />
                    }
                ]
            }
        ]
    }
])

export default routers;