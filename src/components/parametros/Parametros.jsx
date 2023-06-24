import { MaterialReactTable } from "material-react-table"
import { useFetchParametrosQuery } from "../../features/empresa-api-slice"
import { generateColumns2 } from "../../helpers/gHeaderColumns"
import { Button, Divider, Space, Tag } from "antd"
import { useState } from "react"
import { ExportToCsv } from "export-to-csv"

export const Parametros = () => {

    const { isLoading, data = [] } = useFetchParametrosQuery()
    const [selected, setSeleted] = useState('')
    const { CheckableTag } = Tag
    const columns = !data[selected]?.length ? [] : generateColumns2(data[selected])

    const csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        useBom: true,
        useKeysAsHeaders: false,
        headers: columns.map((c) => c.header)
    };

    const csvExporter = new ExportToCsv(csvOptions)

    function handleSelect(e) {
        // console.log(e)
        setSeleted(e.target.id)
    }
    const handleExportData = (rows) => () => {
        console.log(rows)
        csvExporter.generateCsv(rows.map((row) => row.original));
    }
    return (
        <div className="w-full flex flex-col">
            <Divider style={{ color: 'blue', borderColor: 'blue' }}>
                <div className="mt-4 text-center" >
                    <span className="mt-4 border rounded-lg text-blue-500 font-extralight uppercase text-xs tracking-wider border-blue-500  p-2 px-4">{'Parametros Por Grupos'}</span>
                </div>
            </Divider>
            <Space wrap>
                {
                    Object.keys(data).map((item, idx) => (
                        <CheckableTag key={idx + item} id={item} checked={item === selected} onClick={handleSelect} >
                            {item}
                        </CheckableTag>
                    ))
                }
            </Space>
            <Divider style={{ color: 'blue', borderColor: 'blue' }}>
                <div className="mt-4 text-center" >
                    <span className="mt-4 border rounded-lg text-blue-500 font-extralight uppercase text-xs tracking-wider border-blue-500  p-2 px-4">{selected || 'Selecciones un Parametro'}</span>
                </div>
            </Divider>
            <div>
                {
                    !data[selected]?.length ?
                        <></> :
                        <MaterialReactTable
                            columns={columns}
                            data={data[selected]}
                            positionToolbarAlertBanner="bottom"
                            initialState={
                                {
                                    density: 'compact',
                                    pagination: {
                                        pageSize: 20
                                    }
                                }
                            }
                            renderTopToolbarCustomActions={({ table }) => (
                                <div className="flex gap-4 p-2 flex-wrap">
                                    <Button
                                        onClick={handleExportData(table.getPrePaginationRowModel().rows)}
                                    >Export All Data</Button>
                                </div>
                            )}
                        />
                }
            </div>
        </div >
    )
}