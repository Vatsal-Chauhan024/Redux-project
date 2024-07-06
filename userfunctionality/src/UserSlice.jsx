import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: "Vatsal Chauhan",
        email: "adarsh.vc24@gmail.com",
        id: '1'
    },
    {
        name: "Chirag Chauhan",
        email: "chirag@gmail.com",
        id: '2'
    }
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser : (state, action) =>{
            state.push(action.payload)
        },
        editUser : (state, action) =>{
            
            const {id, name, email} = action.payload;
            const existingUser = state.find(user=> user.id === id)
            if(existingUser){
                existingUser.name=name;
                existingUser.email=email;
            }
        },
        deleteUser: (state, action) =>{
            state.splice(action.payload,1)
        }
    }
})

export const {addUser, editUser, deleteUser} = userSlice.actions
export default userSlice.reducer