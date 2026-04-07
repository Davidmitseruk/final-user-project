import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, usersReducer);
export const store = configureStore({
    reducer: {
        users: persistedReducer,
    },
})

export const persistor = persistStore(store);