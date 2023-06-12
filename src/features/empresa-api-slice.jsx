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
                query(idColumn) {
                    return {
                        url: '/',
                        method: 'POST',
                        body: idColumn
                    }
                }
            })
        };
    },
});

export { apiEmpresa };
export const { useFetchEmpresaQuery, useUpdateEmpresaMutation } = apiEmpresa;