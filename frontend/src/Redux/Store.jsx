import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './Slice'


export const Store = configureStore({
    reducer:{
        user:UserReducer
    }
})