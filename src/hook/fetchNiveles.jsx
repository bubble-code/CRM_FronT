import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { urlNiveles } from '../configURL/apiUrl'



export const useFetchNiveles = () => {
    const [articulos, setArticulos] = useState(['asa']);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    const handleError = error => {
        setError(error)
        setIsloading(false)
    }

    const fetchNiveles = async ({ articulos = ['441137801950'], cliente = '482', desde = '4200', hasta = '4220' }) => {
        setIsloading(true)
        try {
            const response = await axios.post(urlNiveles, {
                cliente, desde, hasta
            })
            let result = response.data.filter(item => articulos.includes(item.Codigo))
            console.log(result)
            const data = response.data
            setArticulos([...data])
            setIsloading(false)
        } catch (error) {
            handleError(error)
        }
    }

    return { articulos, isLoading, error, fetchNiveles }
}

