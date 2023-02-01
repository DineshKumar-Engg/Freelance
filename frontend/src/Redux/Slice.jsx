import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:{
        name:'',
        email:'',
        image:'',
    },
    product:{
        list:''
    },
    cost:{
        total:''
    }
}


export const UserReduxSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        login:(state,action)=>{
            state.value = action.payload
            // state.value.email=action.payload.email
            // state.value.image=action.payload.image
        },
        logout:(state,action)=>{
            state.value= action.payload
            // state.value.email=action.payload.email
            // state.value.image=action.payload.image
        },
        dress:(state,action)=>{
            state.product.list = action.payload
        },
        price:(state,action)=>{
            state.cost.total=action.payload
        }
           
        
    }
})

export const {login,logout,dress,price} = UserReduxSlice.actions
export default UserReduxSlice.reducer