const express=require('express');
const router=express.Router();


const employeeModel=require('../model/employeedata');

router.use(express.json())
router.use(express.urlencoded({extended:true}));

//Get operation
router.get('/',async (req,res)=>{
     try {
        const data=await employeeModel.find();
        res.status(200).send(data);
     } catch (error) {
        res.status(404).send(error);
     }
});

//Post operation
router.post('/add',async(req,res)=>{
    try {
        var item=req.body;
        const data= new employeeModel(item);
        const saveddata=await data.save();
        res.status(200).send('post successfull');
    } catch (error) {
        res.status(404).send('post unsuccessfull');
    }
  
});

//Update operation

router.put('/update/:id',async(req,res)=>{
   try {
    var id=req.params.id;
    const data=await employeeModel.findByIdAndUpdate(id,req.body);
    res.status(200).send('update successfull');   

   } catch (error) {
    res.status(404).send('update unsuccesfull')
   }
});

//Delete operation

router.delete('/delete/:id',async(req,res)=>{
    try {
      var id=req.params.id;
      const data=await employeeModel.findByIdAndDelete(id);
      res.status(200).send('deleted succesfully');
    } catch (error) {
      res.status(404).send('delete unsuccesfull');
    }
});



module.exports=router;
