import { Chip } from '@material-tailwind/react'


export const generateColumns = (data) => {
    if (!data || data.length === 0) {
        return [];
    }

    const firtItem = data[0];

    const columns = Object.keys(firtItem).map(key => ({
        title: <div style={{ fontWeight: 'bold', color: 'blue' }}>{key}</div>,
        dataIndex: key,
        key: key
    }))

    return columns;
}
export const generateColumns2 = (data) => {
    if (!data || data.length === 0) {
        return [];
    }

    const firtItem = data[0];

    const columns = Object.keys(firtItem).map((key, idx) => {
        return key === 'PrecioEstandarA' ?
            {
                header: key,
                accessorKey: key,
                size: 120,
                accessorFn: (row) => row[key] < 100 ? (
                    <div className='flex items-center justify-center'>
                        <Chip color='red' value={row[key].toLocaleString?.('es', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })
                        } />
                    </div >) : (
                    <div className='flex items-center justify-center'>
                        <Chip color='blue' value={row[key].toLocaleString?.('es', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })
                        } />
                    </div >)
            } :
            {
                // title: <div style={{ fontWeight: 'bold', color: 'blue' }}>{key}</div>,
                header: `${key}`,
                accessorKey: key,
                size: 120,
                id: key,
                key: key
            }
    })

    return columns;
}
