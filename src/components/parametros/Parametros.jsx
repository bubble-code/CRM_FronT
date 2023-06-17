import { MaterialReactTable } from "material-react-table"
import { useFetchParametrosQuery } from "../../features/empresa-api-slice"
import { generateColumns, generateColumns2 } from "../../helpers/gHeaderColumns"
import { Space, Tag } from "antd"
import { useState } from "react"


export const Parametros = () => {

    const { isLoading, data = [] } = useFetchParametrosQuery()
    const [selected, setSeleted] = useState('')
    const {CheckableTag}= Tag

    function handleSelect(e) {
        // console.log(e)
        setSeleted(e.target.id)
    }
    const columns = !data[selected]?.length ? [] : generateColumns2(data[selected])
    console.log(data)
    return (
        <div className="w-full flex flex-col">
            <Space wrap>
                {
                    Object.keys(data).map((item, idx) => (
                        <CheckableTag key={idx + item} id={item} checked={item ===selected } onClick={handleSelect} >
                            {item}
                        </CheckableTag>
                    ))
                }
            </Space>
            <p>{selected}</p>
            <Space>
                {
                    !data[selected]?.length ? <></> : <MaterialReactTable columns={columns} data={data[selected]} />
                }
            </Space>
        </div>
    )
}