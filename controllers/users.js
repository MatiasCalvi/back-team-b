const User = require("../models/User");
const bcryptjs = require('bcryptjs') //de esta libreria vamos a utilizar el método hashSync para encriptar la contraseña
const crypto = require('crypto')//de este modulo vamos a requerir el método randomBytes
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse } = require('../config/responses')
const jwt = require('jsonwebtoken')


const controller = {

    registrar: async (req, res, next) => {
        //método para que un usuario se registre
        //luego de pasar por todas las validaciones:
        //desestructura el cuerpo
        let { nombre, edad, nacimiento, foto, mail, contraseña, hobbies, comidas } = req.body
        //define las propiedades "extras" que necesite (online, codigo y verificado)
        let verificado = false
        let online = false
        let codigo = crypto.randomBytes(10).toString('hex')
        //encripto o hasheo la contraseña
        contraseña = bcryptjs.hashSync(contraseña, 10)
        console.log(contraseña)
        try {
            //crea el usuario
            await User.create({ nombre, edad, nacimiento, foto, mail, contraseña, hobbies, comidas, verificado, online, codigo })
            //envía mail de verificación (con transportador)
            await accountVerificationEmail(mail, codigo)
            return userSignedUpResponse(req, res)
        } catch (error) {
            next(error)
        }
    },

    verificar: async (req, res, next) => {
        //método para que un usuario verifique su cuenta
        //requiere por params el código a verificar

        const { code } = req.params
        console.log(code)
        try {
            //busca un usuario que coincida el código
            //y cambia verificado de false a true
            let user = await User.findOneAndUpdate({ code: code }, { verified: true }, { new: true })
            if (user) {
                //si tiene éxito debe redirigir a alguna página (home, welcome, login)
                //con el metodo redirect, redirijo automaticamente al usuario (en el front)
                //hacia la pagina que quiero que se "mueva"
                return res.redirect('http://localhost:8000/api/')
            } //si no tiene éxito debe responder con el error
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
