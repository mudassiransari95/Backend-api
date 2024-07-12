const express=require('express')
const userSignUpController = require('../controllers/userSignup')
const userSigninController = require('../controllers/userSignin')
const updateUser = require('../controllers/updateUser')
const router=express.Router()




router.post('/register',userSignUpController)
router.post('/signin',userSigninController)
router.put('/update',updateUser)



module.exports=router