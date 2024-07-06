import {configureStore} from "@reduxjs/toolkit"
import useReducer from "./UserSlice"

export const store = configureStore({
    reducer: {
        users: useReducer
    }
})
