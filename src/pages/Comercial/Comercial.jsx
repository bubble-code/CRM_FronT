import { FormBuscarOferta } from "../../components/formBuscarOferta/FormBuscarOferta";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import { TitleSubPage } from "../../components/titleSubPage/TitleSubPage";


const options = [
    {
        label: "Oferta Comercial",
        link: "of",
        subOptions: [
            {
                label: "Buscar Oferta",
                link: "searchOferta"
            },
            {
                label: "Nuevo",
                link: "nuevaOferta"
            }
        ]
    },
    {
        label: "Clientes",
        link: "clientes"
    }
]

const PresupuestoPage = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="col-span-1">
                <MainSideBar title="Comercial" options={options} />
            </div>
            <div className="col-span-3">
                <TitleSubPage title="Comercial" />
                <FormBuscarOferta />
            </div>

        </div>
    )
}

export default PresupuestoPage;