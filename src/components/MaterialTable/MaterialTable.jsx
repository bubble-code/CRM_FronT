import { MaterialReactTable } from "material-react-table";
import { generateColumns2 } from "../../helpers/gHeaderColumns";
import { Button } from "antd";
import { ExportToCsv } from "export-to-csv";
import PropTypes from 'prop-types';
import { useFetchNivelesQuery } from "../../features/Bi";
import { useEffect, useState } from "react";
import axios from "axios";


export const MainReactTable = ({ materiales }) => {
    const [cliente, desde, hasta] = ['482', '4200', '4210']
    const [data, setData] = useState([])
    const [columns, setColumns] = useState([])

    // let columns = []
    const csvExporter = new ExportToCsv()

    useEffect(() => {
        const fetch = async () => {
            const mm = materiales.split('\n')
            console.log(mm)
            const resp = await axios.post('http://10.0.0.242:4050/bi', {
                cliente, desde, hasta
            })
            // console.log(resp.data)
            let result = resp.data.filter(item => mm.includes(item.Codigo))
            console.log(result)
            const column = generateColumns2(result);
            const csvOptions = {
                fieldSeparator: ',',
                quoteStrings: '"',
                decimalSeparator: '.',
                showLabels: true,
                useBom: true,
                useKeysAsHeaders: false,
                headers: columns.map((c) => c.header)
            };
            csvExporter.options = csvOptions
            setColumns(column)
            setData(result)
        }
        fetch()
    }, [cliente, desde, hasta, materiales])







    const handleExportData = (rows) => () => {
        console.log(rows)
        csvExporter.generateCsv(rows.map((row) => row.original));
    }

    return (
        <>{
            <MaterialReactTable
                columns={columns}
                data={data}
                positionToolbarAlertBanner="bottom"
                initialState={{
                    density: 'compact',
                    pagination: {
                        pageSize: 100
                    }
                }}
                renderTopToolbarCustomActions={({ table }) => (
                    <div className="flex gap-4 p-2 flex-wrap">
                        <Button
                            onClick={handleExportData(table.getPrePaginationRowModel().rows)}
                        >Export All Data</Button>
                    </div>
                )
                }
            />
        }
        </>
    )
}

MainReactTable.propTypes = {
    cliente: PropTypes.string,
    desde: PropTypes.string,
    hasta: PropTypes.string,
    materiales: PropTypes.string
}