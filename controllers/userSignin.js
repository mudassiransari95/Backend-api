
const User=require('../models/userModel')
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')
async function userSigninController(req,res){
try {
  const {email,password,role}=req.body

  if(!email){
    throw new Error('please provide email')

  }
  if(!password){
    throw new Error('please provide password')

  } 
  if(!role){
    throw new Error('please provide password')

  } 
  const signinUser=await User.findOne({email})

  console.log('sign innnnnnnnnnnnnnn',signinUser)

  if(!signinUser){

    throw new Error('user not found')

  }
  
  const chechPassword=await bcrypt.compareSync( password,signinUser.password)

console.log('checkpassword',chechPassword)

if(chechPassword && signinUser.role===role ){

 res.status(200).json({

  message:'user logged in successfully',

  data:signinUser,

  success:true,

  error:false

 })

}

else {

  throw new Error('please check password or Invalid Details !')

}

} catch (error) {

  res.json({

    message:error.message||error,

    error:true,

    success:false

})

}

}

module.exports=userSigninController


