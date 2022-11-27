const Hotel = require("../models/Hotel");

const controller = {

  create: async (req, resp) => {
    try {
      let new_hotel = await Hotel.create(req.body);

      resp.status(201).json({
        id: new_hotel._id,
        success: true,
        new_hotel,
        message: "The new hotel has been added",
      });
    } catch (error) {
      resp.status(400).json({
        success: false,
        message: "The hotel could not be created",
      });
    }
  },
  read: async (req, res) => {
    let query = {};
    let order = {};
    
    if (req.query.name) {
      query = {
        ...query,
        name: { $regex: req.query.name, $options: "i" },
      };
    }if (req.query.userId) {
      query = {
        ...query,
        userId: req.query.userId,
      };
    }
    if (req.query.order)
      order = {
        name: req.query.order,
      };

    try {
      let allhotels = await Hotel.find(query)
        .sort(order)
        .populate("userId", ["name","photo"]);
      if (allhotels.length > 0) {
        res.status(200).json({
          allhotels,
          success: true,
          message: "hotels were successfully found",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No hotels was found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
/*   readOne: async (req, res) => {
    let { id } = req.params;
    try {
      let hotel = await hotel.find({ _id: id });
      if (hotel) {
        res.status(200).json({
          hotel,
          success: true,
          message: "user found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }, */
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let hotelUpdate = await Hotel.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (hotelUpdate) {
        res.status(200).json({
          success: true,
          message: "Hotel has been modified successfuly",
        });
      } else {
        res.status(400).json({
          success: false,
          message: "hotel not found",
        });
      }
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let hotelEliminate = await Hotel.findOneAndDelete({ _id: id });
      if (hotelEliminate) {
        res.status(200).json({
          success: true,
          message: "hotel has been deleted",
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
