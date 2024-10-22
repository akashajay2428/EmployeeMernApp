import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [user,setUser]=useState({
        username:'',
        password:''
    });

    const navigator=useNavigate()

    const updating=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    };

    
    const senddata=()=>{
            if(user.username=='akash' && user.password=='1234'){
                localStorage.setItem('User_name','Employee');
                navigator('/Home')

            }else {
                alert('not submitted')
            }
    }

    return (
        <>
        <h1 class="heading" style={{color:'black'}}><b>Employee App</b> <img style={{height:'60px',marginTop:'10px'}} src="https://w7.pngwing.com/pngs/720/960/png-transparent-college-course-degree-education-university-essential-app-icon.png" alt="" /></h1>
        <div className="log-in">
    
             <h2 style={{color:'black'}} class="login">LOG IN</h2>
         <TextField id="outlined-basic" label="User name" variant="outlined" value={user.username} onChange={updating} name='username'/><br /><br />
         <TextField id="outlined-danger" label="Password" variant="outlined" value={user.password} onChange={updating} name='password'/><br /><br />  
         <Button variant="outlined" sx={{color:'white', backgroundColor:'green',boxShadow:'2px 2px 8px black'}} onClick={senddata}>Log in</Button>
        </div>
        
        </>
       
      )
    }
    
    export default Login