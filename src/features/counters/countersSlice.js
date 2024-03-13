import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
];
const counterSlice = createSlice({
    name: "counters",
    initialState: initialState,
    reducers:{
        
    }
})