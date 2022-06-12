import { ADD_USER,  DELETE_USER } from "./actionTypes";

const initState={
    count:0,
    reminders:[]
    
}

export const reducer = (state = initState,{type,payload}) =>{
    switch(type){
        case ADD_USER:
            return{
                ...state,
              reminders:  [...state.reminders , payload]
            };

            case DELETE_USER:
            return{
                reminders:[
                ...state.reminders.filter(reminder => reminder !== - payload)]
            };

            default :
            return state;

           
    }
 }
