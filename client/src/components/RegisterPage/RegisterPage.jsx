import React from 'react'

function RegisterPage() {
  return (
    <form>
    <div className="input-container">
      <label>Username </label>
      <input type="text" name="uname" required />
     
    </div>
    <div className="input-container">
      <label>Password </label>
      <input type="password" name="pass" required />
     
    </div>
    <p>Already have an account? <a href='/' style={{textDecoration:"none"}}>Sign In</a></p>
    <div className="button-container">
      <input type="submit" />
    </div>
   
  </form>
  )
}

export default RegisterPage