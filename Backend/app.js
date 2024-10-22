const express=require('express');
const app=new express();
port=3000

require('./db/connection');


const cors=require('cors')
app.use(cors())

const route=require('./route/employeeroute');
app.use('/employee',route);

app.listen(port,()=>{
    console.log(`successfully working on port ${port}`);
})