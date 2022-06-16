import React, {useState} from 'react';
import {   useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
//import Paper from '@mui/material/Paper';
//import Grid from '@mui/material/Grid';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';

const axios = require('axios');



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

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
       const w={
        name:user.name,
        email:user.email
    }

      
       axios.post("http://localhost:5000/users/login", {
        email: user.email,
        password:user.password,
           
           
           
   
   }).then(resp => {
    console.log(resp);
    alert("You have been successfully Logged In");
    change("/customer");
}).catch(error => {
   console.log(error);
//return "error"


});
   
 
   }
    return(
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
          height: 300,
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
            <TextField label="Username" type={"mail"} name="email" onChange={handel} required></TextField>
          </Grid>
          <Grid item xs={8}>
            <TextField label="Password" type={'password'}  name="password" onChange={handel} required></TextField>
          </Grid>
          <Grid item xs={8}>
          <p>Don't have an account? <a href='/register'style={{textDecoration:"none"}}>Sign Up</a></p>
            <Button fullWidth variant="contained" color="secondary" type={"submit"} onClick={submit}> Login </Button>
          </Grid>
          </Grid>
       </Paper>
       </Box>
       </div>
       
    {/* <form>
    <Avatar  sx={{ bgcolor: deepOrange[500] }} src="/broken-image.jpg" />
    <Grid container spacing={1}>
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
     </Grid>
    </form> */}
    
   
  </div>
    ) 
}

