// const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
// const { default: BaseURL } = require("../BaseURL");

// export const AsyncDiscover = createAsyncThunk("discover/data", async ( _ , {rejectWithValue}) => {

//     try {
//         const res = await BaseURL.get("discover", { headers: { Accept: "application/json" } })

//         const data = await res.data.data

//         return data

//     } catch (e) {
//         return rejectWithValue(e.message)
//     }
// })


// const initialState = {
//     loading: false,
//     error: null,
//     data: [],
// }


// const DiscoverSlice = createSlice({
//     name: "discover",
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(AsyncDiscover.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(AsyncDiscover.fulfilled, (state, action) => {
//             state.loading = false
//             state.error = null
//             state.data = action.payload
//         })
//         builder.addCase(AsyncDiscover.rejected, (state, action) => {
//             state.loading = false
//             state.data = []
//             state.error = action.payload
//         })
//     }
// })

// export default DiscoverSlice.reducer