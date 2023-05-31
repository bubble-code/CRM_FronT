
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

    const columns = Object.keys(firtItem).map(key => ({
        // title: <div style={{ fontWeight: 'bold', color: 'blue' }}>{key}</div>,
        header: key,
        accessorKey: key,
        size:120,
    }))

    return columns;
}
