const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Users=require('../models/userModel')


const Login=async (req, res) => {
    try {
      // console.log(req.body)
      const data = await Users.findOne({email: req.body.email})
      // console.log(data)
      // const {password,__v,...refactoredData}=data.toObject()
      // console.log('>>>>>',refactoredData)


      if(data){
        dbPassword=data.password

        // user credential match
        const isMatched = await bcrypt.compare(req.body.password, dbPassword)
        const {password,__v,...refactoredData}=data.toObject()
        // console.log(refactoredData)
        // console.log(isMatched)
      if(isMatched) { 
        // console.log(req.body)
        const token = jwt.sign({ email: req.body.email}, process.env.SECRET_KEY); 
  
        res.json({message: "login succcess", success:true,token:token,userDetails:refactoredData})
      }else{
        res.json({message: "login failed",success:false})
      } 
      }
      else{
        res.json({message:'login failed',success:false})
      }
     
      
    } catch (error) {
      console.log(error)
      
    }
   
   
    //do we need hash?
    // do we need new password?
    //how to knnow if pass matched?
    
  }

module.exports=Login