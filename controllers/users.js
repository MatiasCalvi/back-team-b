const User = require("../models/User");

const controller = {
  create: async (requerimiento, respuesta) => {
    try {
      let new_user = await User.create(requerimiento.body);

      respuesta.status(201).json({
        id: new_user._id,
        success: true,
        message: "el usuario se creó satisfactoriamente",
      });
    } catch (error) {
        respuesta.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
module.exports = controller;
