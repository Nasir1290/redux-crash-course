import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./postsApi"

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: null
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const posts = await getPosts();
    return posts;
})

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase();
    }
})

export default postsSlice.reducer;