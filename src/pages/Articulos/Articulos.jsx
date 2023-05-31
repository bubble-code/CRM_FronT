import { useFetchArticu } from "../../hook/fetchArticulos"
import { Spinner } from "@material-tailwind/react";
import { Table } from "antd";
import { FormArticulo } from "../../components/formArticulo/formArticulo";
import { generateColumns2 } from "../../helpers/gHeaderColumns";
import { MaterialReactTable } from "material-react-table";



const ArticulosPage = () => {

    const { articulos, isLoading, fetchArticuloPorID, fetchArticulos } = useFetchArticu()
    const columns = generateColumns2(articulos)

    return (
        <div className="w-full h-full flex flex-col items-center mt-3">
            <FormArticulo fetchArticuloPorID={fetchArticuloPorID} fetchArticulos={fetchArticulos} />
            <div className="w-full h-full mt-5 flex justify-center mb-5">
                {isLoading ? <div>
                    <Spinner className="h-12 w-12" />
                </div> : <MaterialReactTable columns={columns} data={articulos} muiTableProps={{
                    sx: {
                        border: '1px solid rgba(81, 81, 81, 1)',
                    },
                }}
                    muiTableHeadCellProps={{
                        sx: {
                            border: '1px solid rgba(81, 81, 81, 1)',
                        },
                    }}
                    muiTableBodyCellProps={{
                        sx: {
                            border: '1px solid rgba(81, 81, 81, 1)',
                        },
                    }} />
                    // <Table columns={columns} dataSource={articulos} rowKey="IDArticulo" pagination={{ pageSize: 20 }} />
                }
            </div>

        </div>
    )
}

export default ArticulosPage;