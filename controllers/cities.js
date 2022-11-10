const City = require("../models/City");

const controller = {
  create: async (requerimiento, respuesta) => {
    try {
      let new_City = await City.create(requerimiento.body);

      respuesta.status(201).json({
        id: new_City._id,
        success: true,
        message: "La ciudad se creó satisfactoriamente",
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