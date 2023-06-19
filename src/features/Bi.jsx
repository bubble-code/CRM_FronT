import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';



const apiBI = createApi({
    reducerPath: 'apiBI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4050/bi',
        prepareHeaders(headers) {
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchNiveles: builder.query({
                query(data) {
                    return {
                        url: '/',
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: { 'Content-Type': 'application/json' }
                    }
                }
            })
        }
    }
})

export { apiBI }
export const { useFetchNivelesQuery } = apiBI