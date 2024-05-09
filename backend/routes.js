const express = require("express");
const userRoutes = express.Router();
const User = require("./models/user");


    userRoutes.get('/users', async(req,res,next)=>{
        try{
            const data = await User.find({});
            return  res.status(201).send({
                statusText:'Success',
                status:200,
                message:"data displayed",
                data:{data}
            })

        }catch(error){
            res.status(400).send({
                statusText:'BAD REQUEST',
                status:400,
                message:error.message || "gettinf error while adding data",
                data:{}
            })
        }
    })
   


    userRoutes.post('/add', async(req,res,next)=>{
        try{
            const {Name ,Email} = req.body
            console.log(Name ,Email)
            const user  =new User({
                Name: Name,
                Email: Email
                
              });
              console.log("rakam nagar")
              console.log(Name ,Email)
              const rrr = await user.save()
          
       return res.status(201).send({
                statusText:'CREATED',
                status:201,
                message:"success",
                data:{rrr}
        })
        }catch(error){
            res.status(400).send({
                statusText:'BAD REQUEST',
                status:400,
                message:error.message || "gettinf error while adding data",
                data:{}
            })
        }
        

    })
   



    userRoutes.put('/update/:id', async(req,res,next)=>{
        try{
            const data = req.body ;
            console.log(data)
            const user = await User.findByIdAndUpdate({_id: req?.params?.id},data);
            return  res.status(201).send({
                statusText:'Success',
                status:200,
                message:"data displayed",
                data:{data}
            })

        }catch(error){
            res.status(400).send({
                statusText:'BAD REQUEST',
                status:400,
                message:error.message || "gettinf error while adding data",
                data:{}
            })
        }
    })






    userRoutes.delete('/delete/:id', async(req,res,next)=>{
        try{
            const data = await User.findByIdAndDelete({_id: req?.params?.id});
            if (!data) {
                return res.status(404).json({ message: 'user not found' });
              }
            return res.status(200).send({ message: 'Book deleted successfully' });
            
        }

    catch(error){
            res.status(400).send({
                statusText:'BAD REQUEST',
                status:400,
                message:error.message || "gettinf error while adding data",
                data:{}
            })
    }
})




module.exports = userRoutes;