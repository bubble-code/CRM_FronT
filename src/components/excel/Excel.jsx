import { useEffect, useRef, useState } from "react"
import { read as XLSXRead, utils } from 'xlsx';
import { Form, Button } from "antd";
import moment from "moment";
import { RenderGrid } from './RenderTable'
import { useFetchNiveles } from "../../hook/fetchNiveles";

export const ExcelUploades = () => {

    const inputFileRef = useRef(null)
    const [fileName, setFileName] = useState(null)
    const [workbook, setWorkbook] = useState(null)
    const [data, setData] = useState(null);
    const [selectedSheet, setSelectedSheet] = useState(null);
    const { fetchNiveles, articulos, isLoading } = useFetchNiveles()

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        // console.log(file)
        setFileName(file.name)
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSXRead(data, { type: 'array' })
            setWorkbook(workbook)
        }

        reader.readAsArrayBuffer(file)

    }



    const handleSelectSheet = (sheetName) => {
        const workheet = workbook.Sheets[sheetName]
        const jsonData = utils.sheet_to_json(workheet, { header: 1 })
        // console.log(jsonData)
        setData(jsonData)
        setSelectedSheet(sheetName)

    }
    const handleClick = () => {
        inputFileRef.current.click()
    }
    const handleFetch = async () => {
        await fetchNiveles({ articulos: '482', cliente: '482', desde: '4200', hasta: '4220' })
        console.log(articulos)
    }



    return (
        <div className="flex flex-col">
            <div>
                <Form layout="horizontal" className="flex gap-4">
                    <Form.Item wrapperCol={{ span: 4 }} labelCol={{ span: 2 }} style={{ display: 'none' }}>
                        <input ref={inputFileRef} type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleFileUpload} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 4 }} labelCol={{ span: 2 }}>
                        <Button type="default" color="blue" onClick={handleClick} >Seleccionar</Button>
                    </Form.Item>
                    {
                        fileName && <>
                            <Form.Item label='Nombre Archivo' >
                                <p>{fileName}</p>
                            </Form.Item>
                            <Form.Item>
                                <Button onClick={() => handleFetch()}>Consultar</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button>Guardar</Button>
                            </Form.Item>

                        </>
                    }
                </Form>
            </div>
            <div>
                <div className="flex gap-12">
                    <div className="flex gap-3">
                        {workbook?.SheetNames?.map((item) => {
                            return <div key={item} id={item} onClick={() => handleSelectSheet(item)} className={`border border-blue-500 px-2 text-center rounded-lg cursor-pointer ${item === selectedSheet ? 'bg-blue-gray-300' : ''}`}>{item}</div>
                        })}
                    </div>
                </div>
                {
                    data ? <RenderGrid data={data} /> : <></>
                    // data[8]?.map((item) => {

                    //     return (
                    //         <div key={item} id={item} className={`border border-blue-500 px-2 text-center rounded-lg cursor-pointer ${item === selectedSheet ? 'bg-blue-gray-300' : ''}`}>
                    //             {isNaN(item) ? item : convertExcelDate(item)}
                    //         </div>
                    //     )
                    // }) : <></>
                }
                {
                    isLoading ?? <span>Loading...</span>
                }
            </div>
        </div>
    )

}