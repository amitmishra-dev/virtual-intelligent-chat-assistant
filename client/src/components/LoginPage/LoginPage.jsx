import React, {useState} from 'react';
import {   useNavigate } from 'react-router-dom'

const axios = require('axios');

export default function LoginPage() {
    const [user,setuser]=useState({
        email:'',
        password:''
    })
     
    
       const change=useNavigate()
   
   function signuphandel(){
   
       change.push('/')
   }
   
   //const dispatch = useDispatch();
   function handel(e){
   
       const {name,value}=e.target
   
       setuser({
   
           ...user,
           [name]:value
       })
   
   
   }
   
   function submit(e){
   
       e.preventDefault()
      
       axios.get("http://localhost:3004/users", {
      
           
           
           
   
   }).then(resp => {
   
       const data = resp.data;
   
       data.map(function(el){
           if(el.email==user.email&& el.password==user.password){
              // change.push("/")
   
             
              change("/users");
           }
          
           
       })
   }).catch(error => {
       
   return "error"
   });
   }
    return(
    <div className="form">
    <form>
      <div className="input-container">
        <label>Username </label>
        <input type="mail" name="email" onChange={handel} required />
       
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="password" onChange={handel} required />
       
      </div>
      <p>Already have an account? <a href='/register'style={{textDecoration:"none"}}>Sign Up</a></p>
      <div className="button-container">
        <input type="submit" onClick={submit} />
      </div>
     
    </form>
  </div>
    ) 
}

