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
        let itineraries = await Itinerary.find(query/* ,{userId:0} */).populate('userId')
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
  };
  module.exports = controller;
  