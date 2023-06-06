import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { urlOfertas } from '../configURL/apiUrl';



const apiOfertaSlice = createApi({
    reducerPath: 'apiOfertas',
    baseQuery: fetchBaseQuery({
        baseUrl: urlOfertas,
        prepareHeaders(headers) {
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchOfertas: builder.query({
                query(add) {
                    return '/'
                },
            }),
        };
    },
});

export { apiOfertaSlice }
export const { useFetchOfertasQuery, endpoints: { fetchOfertas } } = apiOfertaSlice;