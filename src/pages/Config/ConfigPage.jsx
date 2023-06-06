import { useEffect } from "react";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import { TitleSubPage } from "../../components/titleSubPage/TitleSubPage";
import { useDispatch } from "react-redux";
import { changeRoute } from "../../redux/Slices/RouteSlice";

export default function ConfigPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(changeRoute("Seleccione la Opcion"))
        }
    }, [dispatch])

    const options = [
        {
            label: "Empresa",
            link: "empresa",
            subOptions: [
                {
                    label: "Empresa",
                    link: "empresa",
                    subOptions: [
                        {
                            label: "Contadores",
                            link: "contadores",
                            subOptions: [
                                {
                                    label: "Contadores",
                                    link: "contadores/contadores"
                                },
                                {
                                    label: "Contadores de Entidad",
                                    link: "contadores/entidad"
                                }
                            ]
                        },
                        {
                            label: "Calendario",
                            link: "calendarios",
                            subOptions: [
                                {
                                    label: "Datos de Empresa",
                                    link: "calendarios/datosempresa"
                                },
                                {
                                    label: "Centro de Gestion",
                                    link: "calendarios/centrogestion"
                                },
                                {
                                    label: "Bancos Propios",
                                    link: "calendarios/bancospropios"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Tablas Estables",
                    link: "testables",
                    subOptions: [
                        {
                            label: "Datos de Empresa",
                            link: "datosempresa"
                        },
                        {
                            label: "Consulta de Parametros",
                            link: "consultaParametros"
                        },
                        {
                            label: "Consulta de Entidades",
                            link: "consultaentidades"
                        }
                    ]
                },
                {
                    label: "Parametrizacion",
                    link: "parametrizacion",
                    subOptions: [
                        {
                            label: "Parametros",
                            link: "parametros",
                            subOptions: [
                                {
                                    label: "Grupo de Parametros",
                                    link: "grupoparametros"
                                },
                                {
                                    label: "Parametros",
                                    link: "parametros"
                                },
                                {
                                    label: "Consulta Parametros",
                                    link: "consultaparametros"
                                }
                            ]
                        },
                        {
                            label: "Configuracion Correos",
                            link: "configuracioncorreo"
                        },
                        {
                            label: "Entidades Fotos",
                            link: "entidadesfotos"
                        }
                    ]
                },
                {
                    label: "Tablas Auxiliares",
                    link: "tauxiliares",
                    subOptions: [
                        {
                            label: "Tablas Auxiliares",
                            link: "auxiliares/tauxiliares"
                        }
                    ]
                },
            ]
        },

    ]


    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 overflow-x-hidden">
            <div className="col-span-1">
                <MainSideBar title="Configuracion" options={options} />
            </div>
            <div className="col-span-3">
                <TitleSubPage title="Configuracion" />
            </div>

        </div>
    )
}