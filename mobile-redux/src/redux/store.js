import {configureStore} from '@reduxjs/toolkit';
import clientsReducer from './clientsSlice.js' ;

export const store = configureStore({
    reducer: {
        clients: clientsReducer
    }
})