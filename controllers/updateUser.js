
const Auth=require('../models/userModel')
const bcrypt = require('bcryptjs');
let updateUser=async(req,res)=>{
    let {email,password}=req.body
    let update=await  Auth.findOne({email})
    console.log(update) 
    try {
        if(update){
             const salt = bcrypt.genSaltSync(10);
            const hashpassword = bcrypt.hashSync(password, salt);
            
            if(hashpassword){
                   await Auth.updateOne({email:update.email},{$set:{password:hashpassword}})
               return res.status(200).json({success:true,msg:"password updated successfully"})
            }
            else {
                return res.status(404).json({success:false,msg:"invalid credential!"})
            }
            
        }    
    } catch (error) {
        return res.status(404).json({success:false,msg:"technical issue",error:error.message})
    }

}
module.exports=updateUser