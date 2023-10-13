// dataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        newInData: {
            men: [],
            women: [],
            golf: [],
            kids: [],
            tommyJeans: [],
            shoes: [],
        },
    },
    reducers: {
        setData: (state, action) => {
            state.newInData = action.payload;
        },
    },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
