import { useCallback, useState } from 'react';
import axios from 'axios';
import { urlCalidad } from '../configURL/apiUrl';


export const useFetchCalidad = () => {

    const [calidads, setCalidads] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null)

    const handleError = (error) => {
        setError(error);
        setIsloading(false)
    }

    const fetchCalidads = useCallback(async () => {
        setIsloading(true);
        try {
            const response = await axios(urlCalidad);
            setCalidads(response.data)
            setIsloading(false)
        } catch (error) {
            handleError(error)
        }
    }, [])

    return { calidads, isLoading, error, fetchCalidads }
}