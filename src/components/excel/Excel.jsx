import { useState } from "react"
import { read as XLSXRead, utils } from 'xlsx';
import { saver } from 'file-saver'
import { Input } from "antd";
import moment from "moment";

export const ExcelUploades = () => {

    const [fileData, setFileData] = useState(null)
    const [data, setData] = useState(null);
    const [sheetName, setSheetNames] = useState(null);
    const [selectedSheet, setSelectedSheet] = useState(null);
    const [selectedColumn, setSelectedColumn] = useState(null)

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            setFileData(data)
            const workbook = XLSXRead(data, { type: 'array' })
            const sheetName = workbook.SheetNames
            setSheetNames(sheetName)
        }

        reader.readAsArrayBuffer(file)

    }

    const convertExcelDate = (excelDate) => {
        const date = moment(new Date(0)).add(excelDate, 'days');
        const formatDate = date.format('DD - MMM')
        return formatDate
    };

    const handleSelectSheet = (sheetName) => {
        const workbook = XLSXRead(fileData, { type: 'array' })
        const workheet = workbook.Sheets[sheetName]
        const jsonData = utils.sheet_to_json(workheet, { header: 1 })
        console.log(jsonData)
        setData(jsonData)
        setSelectedSheet(sheetName)

    }

    return (
        <div className="flex flex-col gap-4">
            <input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleFileUpload} />
            <div className="flex gap-12">
                <div className="flex flex-col w-[150px] gap-3">
                    {sheetName?.map((item) => {
                        return <div key={item} id={item} onClick={() => handleSelectSheet(item)} className={`border border-blue-500 px-2 text-center rounded-lg cursor-pointer ${item === selectedSheet ? 'bg-blue-gray-300' : ''}`}>{item}</div>
                    })}
                </div>
                <div className="flex flex-col gap-3">
                    {
                        data ? data[8]?.map((item) => {

                            return (
                                <div key={item} id={item} className={`border border-blue-500 px-2 text-center rounded-lg cursor-pointer ${item === selectedSheet ? 'bg-blue-gray-300' : ''}`}>
                                    {isNaN(item) ? item : convertExcelDate(item)}
                                </div>
                            )
                        }) : <></>
                    }
                </div>
            </div>
        </div>
    )

}