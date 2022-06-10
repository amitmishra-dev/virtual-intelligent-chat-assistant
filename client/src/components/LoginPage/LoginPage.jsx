import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';




export default function LoginPage() {
    return(
    <div className="form">
    <form>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
       
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
       
      </div>
      <p>Already have an account? <a href='/register'style={{textDecoration:"none"}}>Sign Up</a></p>
      <div className="button-container">
        <input type="submit" />
      </div>
     
    </form>
  </div>
    ) 
}

