import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { urlArticulos } from '../configURL/apiUrl'


export const useFetchArticu = () => {
    const [articulos, setArticulos] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    const handleError = (error) => {
        setError(error);
        setIsloading(false)
    }

    const fetchArticulos = useCallback(async () => {
        setIsloading(true)
        try {
            const response = await axios(urlArticulos)
            setArticulos(response.data)
            setIsloading(false)
        } catch (error) {
            handleError(error)
        }
    }, [])

    const fetchArticuloPorID = async (id) => {
        setIsloading(true)
        try {
            const response = await axios.post(`${urlArticulos}/${id}`);
            setArticulos(response.data)
            setIsloading(false)
        } catch (error) {
            handleError(error)
        }
    }
 
    // useEffect(() => {
    //     fetchArticulos()
    // }, [fetchArticulos])

    return { articulos, isLoading, error, fetchArticulos, fetchArticuloPorID }
}