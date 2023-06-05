
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { urlOfertas } from "../../configURL/apiUrl";
import axios from "axios";

const initialState = {
    data: "Seleccione la Opcion",
    error: null,
    loading: false,
    entity: []
}

// 
export const fetchUserId = createAsyncThunk('routeSlice/allOfertas', async () => {
    const response = await axios.get(urlOfertas);
    return response.data
})
// 

const routeSlice = createSlice({
    name: "routeSlice",
    initialState,
    reducers: {
        changeRoute(state, action) {
            state.data = action.payload
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchUserId.fulfilled, (state, action) => {
            state.entity.push(action.payload)
        })
    }
})

export default routeSlice.reducer;
export const { changeRoute } = routeSlice.actions
