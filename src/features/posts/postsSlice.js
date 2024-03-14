import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: null
}

const postsSlice = createSlice({
    name:"posts",
    initialState:initialState,
    reducers:{

    }
})

export default postsSlice.reducer;