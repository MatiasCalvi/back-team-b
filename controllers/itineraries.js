const { query } = require("express");
const Itinerary = require("../models/Itinerary");

const controller = {
    readOne: async (req, res) => {
      let query = {};
      if (req.query.cityId) {
        query = {query,
          cityId: req.query.cityId,
        };
      }
      try {
        let itineraries = await Itinerary.find(query/* ,{userId:0} */)
        if (itineraries) {
          res.status(200).json({
            itineraries,
            success: true,
            message: "itineraries are here",
          });
        }
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
    },
    create: async (requerimiento, respuesta) => {
        try {
          let new_Itinerary= await Itinerary.create(requerimiento.body);
    
          respuesta.status(201).json({
            id: new_Itinerary._id,
            success: true,
            message: "Your Itinerary has been created",
          });
        } catch (error) {
          console.log(error.message);
          respuesta.status(400).json({
            success: false,
            message: error.message,
          });
        }
      }
  };
  module.exports = controller;
  