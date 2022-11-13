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
};

module.exports = controller;