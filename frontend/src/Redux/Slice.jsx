import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:{
        name:'',
        email:'',
        image:'',
    }
}


export const UserReduxSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        login:(state,action)=>{
            state.value.name = action.payload.name
            state.value.email=action.payload.email
            state.value.image=action.payload.image
        },
        logout:(state,action)=>{
            state.value.name = action.payload.name
            state.value.email=action.payload.email
            state.value.image=action.payload.image
        }
    }
})

export const {login,logout} = UserReduxSlice.actions
export default UserReduxSlice.reducer