const mongoose=require('mongoose');

const mongoUrl='mongodb+srv://akashajay10:akash242810@cluster0.9ltch.mongodb.net/EmployeeMern?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUrl).then(()=>{
      console.log('connection established');
}).catch(()=>{
      console.log(' connection not established');
});