const User = require("../models/User");
const bcryptjs=require('bcryptjs')
let cripto= require('crypto')
let accountVerificationEmail= require('./accountVerificationEmail')
const {userSignedUpResponse}=require('../config/responses')

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

    ingresar: async (req, res, next) => {
        const { password } = req.body;
        const {user} = req;

        //método para que un usuario inicie sesión
        //luego de pasar por todas las validaciones:
            //desestructura la contraseña y el objeto user que vienen en el req
            //compara las contraseñas
                //si tiene éxito debe generar y retornar un token y debe redirigir a alguna página (home, welcome)
                    //además debe cambiar online de false a true
                //si no tiene éxito debe responder con el error
                console.log(user)
        try {
            const verificarContraseña = bcryptjs.compareSync(password, user.password)

            if(verificarContraseña) {
                const userDb = await User.findOneAndUpdate({_id: user.id}, {logged: true}, {new: true})
                const token = jwt.sign(
                    {id: userDb._id, name: userDb.name, photo: userDb.photo, logged: userDb.online},
                    process.env.KEY_JWT,
                    {expiresIn: 60 * 60 * 24}
                )

                return res.status(200).json({
                    response: {user, token},
                    success: true,
                    message: 'Welcome ' + userDb.name
                })
            }
            
            return invalidCredentialsResponse(req, res)

        } catch (error) {
            next(error)
        }
    },

    ingresarConToken: async (req, res, next) => {

        //método para que un usuario que ya inicio sesión no la pierda al recargar
        //solo para usuarios registrados en nuestra app (social loguin se maneja en front)
        //luego de pasar por todas las validaciones:
        //debe responder con los datos del usuario
        let {user} = req
        try {
            return res.json({
                response: {
                    user: {
                        name: user.name,
                        photo: user.photo
                    },
                },
                success: true,
                message: 'Welcome ' + user.name
            })
        } catch (error) {
            next(error)
        }
    },

    salir: async (req, res, next) => {
        //método para que un usuario cierre sesión (cambia online de true a false)
        //solo para usuarios registrados en nuestra app (social logout se maneja en front)
        //si tiene éxito debe cambiar online de true a false
        //si no tiene éxito debe responder con el error
        const { id } = req.user
        
        try {
            await User.findOneAndUpdate({_id: id}, {online: false})

            return userSignedOutResponse(req, res)
        } catch (error) {
            next(error)
        }
    }
  
};
module.exports = controller;
