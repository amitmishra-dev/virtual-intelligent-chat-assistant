import React,{ useState } from 'react'
import {  useNavigate } from 'react-router-dom'


const axios = require('axios');
function RegisterPage() {
    const [user,setuser]=useState({
        email:'',
        password:'',
        firstName:"",
        lastName:"",

    })
   
       const change=useNavigate()
   
   
   
   
   function handel(e){
   
       const {name,value}=e.target
   
       setuser({
   
           ...user,
           [name]:value
       })
   
   
   }
   
   function submit(e){
   
       e.preventDefault()
       const w={
           name:user.name,
           email:user.email
       }
   
       axios.post("http://localhost:3004/users", {
      
            
             firstName:user.firstName,
             lastName: user.lastName,
             role: user.role,
             email: user.email,
             password:user.password,

         
           
           
   
   }).then(resp => {
       console.log(resp);
       alert("You have been registered");
       change("/");
   }).catch(error => {
   
   return "error"
   
   
   });
   
   
   }
   
  return (
    <form>
    <div className="input-container">
      <label>First Name </label>
      <input type="text" name="firstName"onChange={handel} placeholder='Enter your first name' required />
     
    </div>

    <div className="input-container">
      <label>Last Name </label>
      <input type="text" name="lastName"onChange={handel} placeholder='Enter your last name' required />
     
    </div>
 
    <div className="input-container">
      <label>Email </label>
      <input type="mail" name="email"onChange={handel} placeholder='Enter your email' required />
     
    </div>

    <div className="input-container">
      <label>Password </label>
      <input type="password" name="password" onChange={handel} required />
    </div>

    <div className="input-container">
    <label >Role</label>
    <input type="text" name="role" onChange={handel}  checked/>
    

    </div>




    <p>Already have an account? <a href='/' style={{textDecoration:"none"}}>Sign In</a></p>
    <div className="button-container">
      <input type="submit" onClick={submit} />
    </div>
   
  </form>
  )
}

export default RegisterPage