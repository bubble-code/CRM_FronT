import FormPresupuesto from "../../components/formPresupuesto/formPresupuesto";
import MainSideBar from "../../components/mainSideBar/MainSideBar";


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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="col-span-1">
                <MainSideBar title="Comercial" options={options} />
            </div>
            <div className="col-span-2">
                <FormPresupuesto />
            </div>

        </div>
    )
}

export default PresupuestoPage;