import { createSlice } from "@reduxjs/toolkit";

export const sliceStore = createSlice({
    name:'counter',
    initialState:10,
    reducers:{
        increment:(state,action)=>{
            return state+=action.payload
        },
        decrement:(state,action)=>{
            return state-=action.payload
        },
        reset:(state,action)=>{
            return state=action.payload
        }
    }
    
})

export const {increment,decrement,reset} = sliceStore.actions
export default sliceStore.reducer