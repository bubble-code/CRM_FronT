import { MaterialReactTable } from "material-react-table"
import { useFetchParametrosQuery } from "../../features/empresa-api-slice"
import { generateColumns, generateColumns2 } from "../../helpers/gHeaderColumns"


export const Parametros = () => {

    const { isLoading, data = [] } = useFetchParametrosQuery()
    const columns = generateColumns2(data)

    return (
        <div className="w-full">
            {<MaterialReactTable columns={columns} id='s' data={data} />}
        </div>
    )
}