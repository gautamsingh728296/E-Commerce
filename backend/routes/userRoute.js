const express = require('express');
const router = express.Router();
const User = require('../models/User')
const jwt =  require('jsonwebtoken')


router.post('/signup',async(req,res)=>{

// const {username,email,password}=req.body;
// console.log(username,email,password)
    //  res.status(201).json(req.body.formData)
    const {email,password,username}=req.body.formData;
    // console.log(email[0])
    const email1=email[0]
    const password1=password[0]
    const username1=username[0]
    // res.status(201).json({email,password,username})
    let check = await User.findOne({email1})
    // res.status(201).json(check)
    console.log(check)
    if(check){
        return res.status(400).json({
            success:false, errors:"existing user found with same email"
        })
    }
    // res.json("fgeg");
    let cart = {};
    for(let i=0; i<300; i++){
        cart[i] = 0;
    }
    const user = new User({
        name:username1,
        email:email1,
        password:password1,
        cartData:cart
    })
    await user.save();
   
    
    const data = {
        user:{
            id:user.id
        }
    }

    const token=  jwt.sign(data,'secret_ecom');
    res.json({
        success:true,
        token
    })
   
    // console.log()

})



router.post('/login',async(req, res)=>{
    let user = await User.findOne({email:req.body.email})
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom')
            console.log(req.body)
            res.json({
                success:true,
                token
            })
        }
        else{
            res.json({
                success:false,
                errors:"wrong password"
            })
        }
        
    }
    else{
        res.json({
            success:false,
            errors:"Wrong Email ID"
        })
    }
})




module.exports = router;