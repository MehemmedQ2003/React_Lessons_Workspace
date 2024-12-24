/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    loading: false
};

export const getAllUsers = createAsyncThunk('users', async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
})

export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Https istəyi olmaz isə istifadə edilir
    },
    extraReducers: (builder) => {
        // Https istəyi olar isə istifadə edilir
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
    }
})


export const {  } = usersSlice.actions

export default usersSlice.reducer