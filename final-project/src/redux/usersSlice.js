import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { act } from 'react';


export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([])
        }, 500);
    })
})

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        status: 'idle',
        filter: 'all',
    },
    reducers: {
        addUser: (state, action) => {
            state.items.push({
                id: Date.now().toString(),
                name: action.payload,
                active: true,
            })
        },
        deleteUser: (state, action) => {
            state.items = state.items.filter((u) => u.id !== action.payload)
        },
        toggleUser: (state, action) => {
            const user = state.items.find((u) => u.id === action.payload);
            if(user) user.active = !user.active;
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'loading'
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'success';
            state.items = action.payload;
        })
    }
})

export const {
    addUser, deleteUser, toggleUser, setFilter
} = usersSlice.actions;

export default usersSlice.reducer