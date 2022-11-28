const User = require("../models/User");
const bcryptjs=require('bcryptjs')
let cripto= require('crypto')
let accountVerificationEmail= require('./accountVerificationEmail')
const {userSignedUpResponse}=require('../config/responses')
const jwt = require('jsonwebtoken')

const controller = {

      register: async(req,res,next)=>{
        let {name,lastName,photo,age,email,password,role}=req.body
        let verified=false
        let logged=false
        let code=cripto.randomBytes(10).toString('hex')
        password= bcryptjs.hashSync(password,10)
        try{
            
            await User.create({name,lastName,photo,age,email,password,verified,logged,code,role})
            await accountVerificationEmail(email,code)
            return userSignedUpResponse(req, res)
        }   
        catch(error){
            console.log(error)
            next(error)
        }
      },
      verificar: async (req, res, next) => {
        const { code } = req.params
        console.log(code)
        try {
         
            let user = await User.findOneAndUpdate({ code: code }, { verified: true }, { new: true })
            if (user) {
               /*  user.verified=true;
                await user.save() */
               return res.redirect('https://www.google.com/')
            } 

            return userNotFoundResponse(req, res)
        } catch (error) {
            next(error)
        }
    },

}

module.exports= controller;

