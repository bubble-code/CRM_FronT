import { ReactGrid } from '@silevis/reactgrid'
import moment from 'moment';
import Proptypes from 'prop-types'
import { Spreadsheet } from 'react-spreadsheet';
import "./style.css";

const convertExcelDate = (excelDate) => {
    const date = moment(new Date(0)).add(excelDate, 'M');
    const formatDate = date.format('DD - MMM')
    return formatDate
};


export const RenderGrid = ({ data, labelColumns }) => {
    const newData = data.slice(9);
    // const labelColumns = data[8].map((name, idx) => {
    //     return isNaN(name) ? <span className='uppercase font-semibold text-black'>{name}</span> : <span className='uppercase font-semibold text-black'>{convertExcelDate(name)}</span>
    // })

    const data2 = newData.map((item, idx) => item.map((row) => {
        return isNaN(row) ? { value: row } : { value: parseFloat(row) }
    }))

    return (
        <div className='mt-5'>
            {/* <ReactGrid columns={getColumns} rows={getRows} /> */}
            <Spreadsheet data={data} columnLabels={labelColumns} className='font-extralight' style={{}} id='table1' />

        </div>
    )
}

RenderGrid.propTypes = {
    data: Proptypes.object,
    labelColumns: Proptypes.array
}