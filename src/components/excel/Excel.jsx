import { useEffect, useRef, useState } from "react"
import { read as XLSXRead, utils } from 'xlsx';
import { Form, Button } from "antd";
import moment from "moment";
import { RenderGrid } from './RenderTable'
import { useFetchNiveles } from "../../hook/fetchNiveles";



const convertExcelDate = (excelDate) => {
    const date = moment(new Date(0)).add(excelDate, 'M');
    const formatDate = date.format('DD - MMM')
    return formatDate
};

export const ExcelUploades = () => {

    const inputFileRef = useRef(null)
    const [fileName, setFileName] = useState(null)
    const [workbook, setWorkbook] = useState(null)
    const [data, setData] = useState(null);
    const [selectedSheet, setSelectedSheet] = useState(null);
    const [labelColumn, setLabelColumns] = useState([])
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

        const headData = jsonData[8]
        const labels = []
        for (let index = 2; index < headData.length; index++) {
            const label = isNaN(headData[index]) ? <span className='uppercase font-semibold text-black'>{headData[index]}</span> : <span className='uppercase font-semibold text-black'>{convertExcelDate(headData[index])}</span>
            labels.push(label)
            if (index === 3) {
                labels.push(<span className='uppercase font-semibold text-black'>PVP</span>)
                labels.push(<span className='uppercase font-semibold text-black'>Coeficiente</span>)
                labels.push(<span className='uppercase font-semibold text-black'>CosteChapa</span>)
                labels.push(<span className='uppercase font-semibold text-black'>Chapa</span>)
            }
            if (!isNaN(headData[index])) {
                labels.push(<span className='uppercase font-semibold text-black'>{`Ch ${convertExcelDate(headData[index])}`}</span>)
            }
            if (headData[index].toString().toUpperCase() === 'TOTAL') {
                labels.push(<span className='uppercase font-semibold text-black'>Ch Total</span>)
            }
        }
        const newData = jsonData.slice(9)
        const mainData = []
        const article = newData.map((item) => {
            const eachItem = []
            for (let index = 2; index < item.length; index++) {
                eachItem.push({ value: item[index] });
                if (index === 3) {
                    eachItem.push({ value: '' })
                    eachItem.push({ value: '' })
                    eachItem.push({ value: '' })
                    eachItem.push({ value: '' })
                }
                if (!isNaN(headData[index])) {
                    eachItem.push({ value: '' })
                }
            }
            mainData.push(eachItem)
            return item[2]
        })
        setData(mainData)

        setLabelColumns(labels)
        setSelectedSheet(sheetName)

    }
    const handleClick = () => {
        inputFileRef.current.click()
    }
    const handleFetch = async () => {
        const article = data.map((item) => item[0].value)
        await fetchNiveles({
            articulos: article, cliente: '482', desde: '4200', hasta: '4220'
        })
        console.log('data', data)
        const newData = []
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const foundIndex = []
            for (let j = 0; j < articulos.length; j++) {
                if (articulos[j].Codigo === element[0].value) {
                    foundIndex.push(j)
                }
            }
            if (foundIndex > 0) {
                element[2].value = articulos[foundIndex[0]].PrecioVenta
                element[3].value = (articulos[foundIndex[0]]['U.Br']).toFixed(8)
            }
            newData.push(element)

            // console.log('index', foundIndex)


        }
        console.log('element', newData)
        setData(newData)

        // setData((dat) => [...dat])
        // console.log('articulos', typeof (articulos))
        console.log('articulos', articulos)

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
                    data ? <RenderGrid data={data} labelColumns={labelColumn} /> : <></>
                }
            </div>
        </div>
    )

}