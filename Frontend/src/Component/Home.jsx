import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Nav from './Nav'
import { useNavigate } from 'react-router-dom';

const Course = () => {
  const [employee, setemployee] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3000/employee')
      .then((res) => {
        setemployee(res.data); // Set fetched product data
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // Handle error
      });
  }, []);



  const navigating=useNavigate();

  const deleteop=(p)=>{//Here, setRows is a React state updater function, used to update the current list of courses stored in the rows state.
    // prevRows represents the previous state (the current list of courses before deletion).
    // The .filter() method is used to create a new array that excludes the deleted course. 
    //The condition course._id !== p checks if the course._id is not equal to p. If the course's ID does not match the one we deleted, 
    //it remains in the array; otherwise, it is removed.
    axios.delete(`http://localhost:3000/employee/delete/${p}`)
    .then(()=>{
         alert('delete Successfull');
         setemployee(prevRows => prevRows.filter(course => course._id !== p));//employee
          navigating('/Home');
    }).catch(()=>{
      alert('delete unsuccessfull')
    })
  };

    const updateop=(cor)=>{
      navigating('/add',{state:{cor}});
    }



  const User=localStorage.getItem('User_name')

  return (
    <>
      <div class="nav">
        <Nav/>
      </div><br />
      <div style={{textShadow:'2px 2px 2px black'}}>

        <h1><span class="one">W</span>
      <span class="two">e</span>
      <span class="one">l</span>
      <span class="two">c</span>
      <span class="one">o</span>
      <span class="two">m</span>
      <span class="one">e</span> <span class="two">{User}</span> <span class="two">!</span></h1><br />
      </div>
      
      <Container>
        <Grid container spacing={10}>
          {employee.map((course) => (
            <Grid item key={employee.id} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth:500 , marginTop:'0px', border:'2px double black',boxShadow:'8px 8px 10px green'}}>
             
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">

                  </Typography>
                  <Typography variant="body2" sx={{ color: 'red' }}>Employee Id :{course.ID}</Typography>
                  <Typography variant="h4" sx={{ color: 'black' }}>Name :{course.Name}</Typography>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>Designation :{course.Designation}</Typography>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>Salary :{course.Salary}</Typography>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>Department :{course.Department}</Typography>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>Location:{course.Location}</Typography>

                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
                  <Button variant="contained" sx={{ backgroundColor: 'green', marginLeft:'90px'}} onClick={()=>{updateop(course)}}>Edit</Button>
                  <Button variant="contained" sx={{ backgroundColor: 'Red' }} onClick={()=>{deleteop(course._id)}}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>

          ))}
        </Grid>
      </Container>



    </>
  )
}

export default Course
