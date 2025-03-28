
import {createSlice} from "@reduxjs/toolkit"


export const CartSlice=createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        add:(state, action)=>{
            state.push(action.payload)   //input parameter k ander jo v veja wo action.payload se access kar sakte hai
        },
        remove:(state, action)=>{
            return state.filter((item)=>item.id !== action.payload);
        },
    }
});

export const {add, remove}=CartSlice.actions;
export default CartSlice.reducer;