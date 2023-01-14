const User = require("../models/User");
const bcryptjs = require("bcryptjs");
let cripto = require("crypto");
let accountVerificationEmail = require("./accountVerificationEmail");
const {
  userSignedUpResponse,
  userSignedOutResponse,
  invalidCredentialsResponse,
  userNotFoundResponse,
} = require("../config/responses");
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
        return res.redirect("https://my-tinerary-team-b.vercel.app");
      }
      return userNotFoundResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  access: async (req, res, next) => {
    const { password } = req.body;
    const { user } = req;
    console.log(user);
    try {
      const reviewPass = bcryptjs.compareSync(password, user.password);

      if (reviewPass) {
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

  accesswToken: async (req, res, next) => {
    let { user } = req;
    try {
      return res.json({
        response: {
          user: {
            id: user.id,
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
    const { email } = req.user;
    try {
      await User.findOneAndUpdate({ email }, { logged: false }, { new: true });
      return userSignedOutResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  one: async (req, res) => {
    let { id } = req.user;
    try {
      let user = await User.find({ _id: id });
      if (user) {
        res.status(200).json({
          user,
          success: true,
          message: "A user has been found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "no result",
      });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    
    if (req.body.password) {
      let { password } = req.body;
      password = bcryptjs.hashSync(password, 10);
      req.body.password = password;
    }

    try {
      let uno = await User.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (uno) {
        res.status(200).json({
          id: uno._id,
          success: true,
          message: "user modified",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "user not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        menssage: error.message,
      });
    }
  },
};

module.exports = controller;
