import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addProduct : (state, action) =>{
            state.push(action.payload)
        },
        deleteProduct: (state, action) =>{
            return state.filter((item) => item.id !== action.payload);
        },
        clearProduct: ()=>{
            return []
        }
    }
})



export const {addProduct, deleteProduct, clearProduct} = userSlice.actions
export default userSlice.reducer