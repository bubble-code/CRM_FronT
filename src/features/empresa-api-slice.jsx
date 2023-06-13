import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { urlEmpresa } from "../configURL/apiUrl";


const apiEmpresa = createApi({
    reducerPath: 'apiEmpresa',
    baseQuery: fetchBaseQuery({
        baseUrl: urlEmpresa,
        prepareHeaders(headers) {
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchEmpresa: builder.query({
                query(add) {
                    return '/'
                },
            }),
            updateEmpresa: builder.mutation({
                query(data) {
                    return {
                        url: `/`,
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: { 'Content-Type': 'application/json' },
                    }
                }
            }),
            fetchParametros: builder.query({
                query() {
                    return '/parametros'
                }
            })
        };
    },
});

export { apiEmpresa };
export const { useFetchEmpresaQuery, useUpdateEmpresaMutation, useFetchParametrosQuery } = apiEmpresa;