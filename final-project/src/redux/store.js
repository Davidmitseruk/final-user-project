import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import {persistStore, persitstReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persitstReducer(persistConfig, usersReducer);
export const store = configureStore({
    reducer: {
        users: persistedReducer,
    },
})

export const persistor = persistStore(store);