import { ADD_USER, DELETE_USER } from "./actionTypes";

export const addUser = (data)=>(
    {
        type:ADD_USER,
        payload:data
    }
)

export const deleteUser = (data)=>(
    {
        type:DELETE_USER,
        payload:data
    }
)


