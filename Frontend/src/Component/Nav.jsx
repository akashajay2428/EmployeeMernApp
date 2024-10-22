import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Icon from '@mui/material/Icon';

import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {

  const navigate=useNavigate();
  let clearuser=()=>{
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <>


      <Box sx={{ flexGrow: 1,marginLeft:'-160px',marginRight:'-159px',marginTop:'-32px'}} >
        {/* class="nav-bar" */}
        <AppBar position="static" sx={{padding:'10px',boxShadow:'4px 4px 20px black',backgroundColor:'blacky'}} >
            <Toolbar>
           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,textAlign:'center',fontSize:'40px',marginLeft:'250px', textShadow:'4px 4px 10px black'}} style={{ fontFamily: 'Impact' }} >
                Employee App
                {/* class="app-name" */}
            </Typography >
            <Link to={'/Home'}><Button sx={{color:'black',background:'lightgreen',
            marginRight:'10px',
            borderRadius:'50px',
            border:'2px solid black',
            boxShadow:'4px 4px 4px black',
            fontSize:'large',
            fontFamily:'calibri',
            fontWeight:'bold'


            }}   >Home</Button>
            {/* class="Home-butt" */}</Link>

            <Link to={'/add'}><Button sx={{

              color:'black',background:'lightgreen',
              marginRight:'10px',
              borderRadius:'50px',
              border:'2px solid black',
              boxShadow:'4px 4px 4px black',
              fontSize:'large',
              fontFamily:'calibri',
              fontWeight:'bold'

            }} >Add</Button></Link>
            
            <Button sx={{

                color:'black',background:'lightgreen',
                marginRight:'10px',
                borderRadius:'50px',
                boxShadow:'4px 4px 4px black',
                border:'2px solid black',
                fontSize:'large',
                fontFamily:'calibri',
                fontWeight:'bold'

            }}>Courses</Button>
            <Button onClick={clearuser} sx={{color:'black',background:'lightgreen',
                  borderRadius:'50%',
                  border:'2px solid black',
                  boxShadow:'4px 4px 4px black',
                  fontSize:'large',
                  fontFamily:'calibri',
                  fontWeight:'bold'
            }} > <img style={{height:'40px',background:'transparent',borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/previews/006/693/054/non_2x/logout-icon-template-black-color-editable-log-out-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg" alt="" />
            </Button>
            </Toolbar>
        </AppBar>
        </Box>

    </>
  )
}

export default Nav
// marginRight:'-655px', marginLeft:'-655px',marginTop:'-285px'