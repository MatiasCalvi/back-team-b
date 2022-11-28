const User = require("../models/User");
const bcryptjs = require("bcryptjs");
let cripto = require("crypto");
let accountVerificationEmail = require("./accountVerificationEmail");
const { userSignedUpResponse,userSignedOutResponse,invalidCredentialsResponse,userNotFoundResponse } = require("../config/responses");
const jwt = require("jsonwebtoken");

const controller = {
  register: async (req, res, next) => {
    let { name, lastName, photo, age, email, password, role } = req.body;
    let verified = false;
    let logged = false;
    let code = cripto.randomBytes(10).toString("hex");
    password = bcryptjs.hashSync(password, 10);
    try {
      await User.create({
        name,
        lastName,
        photo,
        age,
        email,
        password,
        verified,
        logged,
        code,
        role,
      });
      await accountVerificationEmail(email, code);
      return userSignedUpResponse(req, res);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  verificar: async (req, res, next) => {
    const { code } = req.params;
    console.log(code);
    try {
      let user = await User.findOneAndUpdate(
        { code: code },
        { verified: true },
        { new: true }
      );
      if (user) {
     
        return res.redirect("https://www.google.com/");
      }
      return userNotFoundResponse(req, res);
    } catch (error) {
      next(error);
    }
  },


  ingresar: async (req, res, next) => {
    const { password } = req.body;
    const { user } = req;
    console.log(user);
    try {
      const verificarContraseña = bcryptjs.compareSync(password, user.password);

      if (verificarContraseña) {
        const userDb = await User.findOneAndUpdate(
          { _id: user.id },
          { logged: true },
          { new: true }
        );
        const token = jwt.sign(
          {
            id: userDb._id,
            name: userDb.name,
            photo: userDb.photo,
            logged: userDb.online,
          },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 24 }
        );

        return res.status(200).json({
          response: { user, token },
          success: true,
          message: "Welcome " + userDb.name,
        });
      }

      return invalidCredentialsResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  ingresarConToken: async (req, res, next) => {

    let { user } = req;
    try {
      return res.json({
        response: {
          user: {
            name: user.name,
            photo: user.photo,
            role: user.role,
          },
        },
        success: true,
        message: "Welcome " + user.name,
      });
    } catch (error) {
      next(error);
    }
  },
  exit: async (req, res, next) => {
    const { email } = req.user 
    try {
        
        await User.findOneAndUpdate(
            { email }, 
            { logged: false }, 
            { new: true } 

        )
        return userSignedOutResponse(req,res) 
    } catch (error) {
        next(error) 
    }
},
};

module.exports = controller;
