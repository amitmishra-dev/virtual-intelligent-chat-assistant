import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../../redux/AdminInfo/action";
import { store } from "../../redux/AdminInfo/action";
import { addUser,deleteUser } from '../../redux/AdminInfo/action';



export const UsersButton = () =>{
    const dispatch = useDispatch();
    const count = useSelector(store => store.count);
   
    return (
      <div className="App">
  
        <h1>Count: {count}</h1>
  
  
        <button onClick={()=>{
          dispatch(addUser(1));
       
        }}>Add User</button>
  
  
        <button onClick={()=>{
          dispatch(deleteUser(1));
       
        }}>Delete User</button>
     
     
      </div>
    )   
}