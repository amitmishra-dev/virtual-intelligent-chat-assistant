import React,{ useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Box from '@mui/material/Box';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';


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
   
       axios.post("http://localhost:5000/users/create", {
      
            
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

    <div style={{alignItem: "centre", margin: "auto",  padding: 80, 
        //  width: 1300,
        // position: "relative",
display: "flex",
justifyContent: "center",
alignItems: "center",
//zIndex: -1,
          height: "78vh",
        backgroundImage: `url(https://w0.peakpx.com/wallpaper/70/122/HD-wallpaper-read-the-book-library-books-motivation-inscription-reader.jpg)`,
        // backgroundRepeat: "no-repeat",
        //backgroundSize: "auto"
      }}>
    <div className="form"  >
       <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          // m: 1,
          width: 400,
          height: 600,
        },
      }}
    >
       <Paper>
       <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid>
          <Avatar  sx={{ bgcolor: deepOrange[500] }} src="/broken-image.jpg" />
          </Grid>
                    <Grid item xs={8}>
            <TextField label="Email" type={"mail"} name="email" onChange={handel} required></TextField>
          </Grid>
          <Grid item xs={8}>
            <TextField label="Password" type={'password'}  name="password" onChange={handel} required></TextField>
          </Grid>
          <Grid item xs={8}>
            <TextField label="Fist Name" type={'text'}  name="firstName" onChange={handel} required></TextField>
          </Grid>
          <Grid item xs={8}>
            <TextField label="Last Name" type={'text'}  name="lastName" onChange={handel} required></TextField>
          </Grid>
          <Grid item xs={8}>
            <TextField label="Role" type={'text'}  name="role" onChange={handel} required></TextField>
          </Grid>
          <Grid item xs={8}>
          <p>Already have an account? <a href='/' style={{textDecoration:"none"}}>Sign In</a></p>
            <Button fullWidth variant="contained" color="secondary" type={"submit"} onClick={submit}> Register </Button>
          </Grid>
          </Grid>
       </Paper>
       </Box>
       </div>
      
       
    

    {/* <form>
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
   
  </form> */}
   </div>
  )
}

export default RegisterPage