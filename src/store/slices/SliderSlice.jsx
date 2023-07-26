// "use client"

import BaseURL from "../BaseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const AsyncSlider = createAsyncThunk("slider/data", async () => {

    try {
        const res = await BaseURL.get("slider")

        const data = await res.data.data
        return data

    } catch (e) {
        return e.error
    }

})

const initialState = {
    loading: false,
    error: null,
    data: [],

}

const SliderSlice = createSlice({
    name: "slider",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(AsyncSlider.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(AsyncSlider.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        })
        builder.addCase(AsyncSlider.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error
        })
    }
})

export default SliderSlice.reducer

