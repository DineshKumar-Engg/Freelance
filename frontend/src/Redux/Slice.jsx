import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:{
        name:'',
        email:'',
        image:'',
    },
    product:{
        list:'',
    },
    count:[],
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
            state.product.list = action.payload.dress
            // state.product.num=action.payload.num
        },
        OrderCount:(state,action)=>{
            state.count=action.payload
        },
        price:(state,action)=>{
            state.cost.total=action.payload
        }
           
        
    }
})

export const {login,logout,dress,OrderCount,price} = UserReduxSlice.actions
export default UserReduxSlice.reducer