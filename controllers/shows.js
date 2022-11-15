const Show = require ('../models/Show')

const showController = {
  create: async (req, res) => {
    try {
      let new_show = await Show.create(req.body);
      res.status(201).json({
        id: new_show._id,
        success: true,
        message: "the show was successfully created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "The new hotel could not be added",
      });
    }
  },

}

module.exports = showController