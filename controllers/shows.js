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
  read: async (req, res) => {
    let query = {};
    if (req.query.hotelId) {
      query = {query,
        hotelId: req.query.hotelId,
      };
    }if (req.query.userId) {
      query = {
        ...query,
        userId: req.query.userId,
      };
    }
    try {
      let shows = await Show.find(query ,{userId:0})
      if (Show) {
        res.status(200).json({
          shows,
          success: true,
          message: "shows are here",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    let {id} = req.params
    try {
        let showUpdate = await Show.findOneAndUpdate({_id:id}, req.body, { new: true })
        if (showUpdate) {
          res.status(200).json({
            success: true,
            message: "The Show has been modified successfuly"
        })  
        } else{
            res.status(400).json({
                success: false,
                message: "The Show not found"
            })
        }
        
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let showEliminate = await Show.findOneAndDelete({ _id: id });
      if (showEliminate) {
        res.status(200).json({
          success: true,
          message: "The Show has been deleted",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
  


};


module.exports = showController