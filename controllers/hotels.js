const Hotel = require("../models/Hotel");




const controller = {
    create: async (req, resp) => {
        try{
            let new_hotel = await Hotel.create(req.body);

            resp.status(201).json({
                id: new_hotel._id,
                success:true,
                message: "The new hotel has been added",
            });
        } catch (error) {
            resp.status(400).json({
                success: false,
                message: "The Show could not be created",
            });
        }
    },
    read: async (req, res) => {
        let query = {}
        let order = {}


          if (req.query.name) {
            query = {
              ...query,
              name: { $regex: req.query.name, $options: "i" },
            };
          }
        if (req.query.order)
        order = { 
            name : req.query.order}
            
        try {
          let allhotels = await Hotel.find(query).sort(order);
          if (allhotels) {
              res.status(200).json({
                allhotels,
                success: true,
                message: "Cities were successfully found",
            });
          } else {
            res.status(404).json({
              success: false,
              message: "No city was found",
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