// "use client"

import BaseURL from "../BaseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const AsyncSlider = createAsyncThunk("slider/data", async (_ , {rejectWithValue}) => {

    try {
        const res = await BaseURL.get("slider")

        const data = await res.data.data
        return data

    } catch (e) {
        return rejectWithValue(e.message)
    }

})

const initialState = {
    loading: true,
    error: null,
    data: [],
}

const SliderSlice = createSlice({
    name: "slider",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(AsyncSlider.pending, (state) => {
            state.loading = true
        })
        builder.addCase(AsyncSlider.fulfilled, (state, action) => {
            state.data = action.payload
            state.error = null
            state.loading = false
        })
        builder.addCase(AsyncSlider.rejected, (state, action) => {
            state.data = []
            state.error = action.payload
            state.loading = false
        })
    }
})

export default SliderSlice.reducer

