import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Nav from './Nav';


const Add = () => {
const [employee,setemployee]=useState({
    ID:'', 
    Name:'', 
    Designation:'', 
    Salary:'', 
    Department:'', 
    Location:''
});

const fetchValue=(e)=>{
     setemployee({...employee,[e.target.name]:e.target.value});
}

const navi=useNavigate;

const location=useLocation()
function sendingdata() {
    if(location.state!=null){
        axios.put('http://localhost:3000/employee/update/'+location.state.cor._id,employee).then((res)=>{
            alert('data updated');
            navi('/Home')
        }).catch((error)=>{
            console.log(error);
        })
    }else {
        axios.post('http://localhost:3000/employee/add',employee).then((res)=>{
            alert('data added')
            navi('/Home')
        }).catch((error)=>{
            console.log(error);
        })    
    }
}
useEffect(()=>{
    if(location.state!=null){
     setemployee({...employee,
        ID:location.state.cor.ID,
        Name:location.state.cor.Name,
        Designation:location.state.cor.Designation,
        Salary:location.state.cor.Salary,
        Department:location.state.cor.Department,
        Location:location.state.cor.Location,
     } )
    }
}, [])


  return (
    <>
    <div class="nav">
        <Nav/>
      </div><br />
      <h1>employee</h1>
      <Box

      component="form"
      sx={{
        border: '1px solid #fffff',
        borderColor: 'BLACK',
        backgroundColor: 'lightblue',
        // borderWidth: '0.3px', 
        borderStyle: 'solid',
        padding:'50px',
        
      }}

    //   sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off">  
      
      <TextField id="standard-basic"
        label="ID"
        variant="standard"
        name='ID'
        value={employee.ID}
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="Name"
        variant="standard"
        name='Name'
        value={employee.Name}
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="Designation"
        variant="standard"
        name='Designation'
        value={employee.Designation}
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="Salary"
        variant="standard"
        name='Salary'
        value={employee.Salary}
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="Department"
        variant="standard"
        name='Department'
        value={employee.Department}
        
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="Location"
        variant="standard"
        name='Location'
        value={employee.Location}
        onChange={fetchValue} /> <br></br>

      <Button variant="contained" onClick={sendingdata}>Submit</Button>
    </Box>
      
    </>
  )
}

export default Add