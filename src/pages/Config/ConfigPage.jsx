import { useEffect } from "react";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import { TitleSubPage } from "../../components/titleSubPage/TitleSubPage";
import { useDispatch } from "react-redux";
import { changeRoute } from "../../redux/Slices/RouteSlice";
import { Outlet } from "react-router-dom";

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
            icon: "MagnifyingGlassIcon",
            subOptions: [
                {
                    label: "Empresa",
                    link: "empresaItem",
                    icon: "BuildingLibraryIcon",
                    subOptions: [
                        {
                            label: "Contadores",
                            link: "contadores",
                            icon: "MagnifyingGlassIcon",
                            subOptions: [
                                {
                                    label: "Contadores",
                                    link: "contadores/contadores",
                                    icon: "StarIcon"
                                },
                                {
                                    label: "Contadores de Entidad",
                                    link: "contadores/entidad",
                                    icon: "StarIcon"
                                }
                            ]
                        },
                        {
                            label: "Calendario",
                            link: "calendarios",
                            icon: "MagnifyingGlassIcon",
                            subOptions: [
                                {
                                    label: "Calendarios",
                                    link: "calendarios"
                                },
                                {
                                    label: "Tipos de Turnos",
                                    link: "tipos/turnos"
                                }
                            ]
                        },
                        {
                            label: "Datos de la Empresa",
                            link: "datosempresa",
                            icon: "StarIcon"
                        },
                        {
                            label: "Centros de Gestion",
                            link: "centros/gestion",
                            icon: "StarIcon"
                        },
                        {
                            label: "Bancos Propios",
                            link: "bancos/propios",
                            icon: "StarIcon"
                        }
                    ]
                },
                {
                    label: "Parametrizacion",
                    link: "parametrizacion",
                    icon: "MagnifyingGlassIcon",
                    subOptions: [
                        {
                            label: "Contadores",
                            link: "contadores/contadores",
                            icon: "StarIcon"
                        },
                        {
                            label: "Contadores de Entidad",
                            link: "contadores/entidad",
                            icon: "StarIcon"
                        }
                    ]
                },
                {
                    label: "Tablas Estables",
                    link: "tablas/estables",
                    icon: "MagnifyingGlassIcon",
                    subOptions: [
                        {
                            label: "Contadores",
                            link: "contadores/contadores",
                            icon: "StarIcon"
                        },
                        {
                            label: "Contadores de Entidad",
                            link: "contadores/entidad",
                            icon: "StarIcon"
                        }
                    ]
                },
                {
                    label: "Contadores",
                    link: "contadores/contadores",
                    icon: "StarIcon"
                },
                {
                    label: "Contadores de Entidad",
                    link: "contadores/entidad",
                    icon: "StarIcon"
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
                    ]
                },
                {
                    label: "Consulta Parametros",
                    link: "parametros",
                },
                {
                    label: "Contadores de Entidad",
                    link: "conotadores",
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
        }
    ]


    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 overflow-x-hidden">
            <div className="col-span-1">
                <MainSideBar title="Configuracion" options={options} />
            </div>
            <div className="col-span-3 self-start">
                <TitleSubPage title="Configuracion" />
                <Outlet />
            </div>

        </div>
    )
}