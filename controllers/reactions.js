const { query } = require("express");
const { object } = require("joi");
const Reaction = require("../models/Reaction");



const controller = {

  create: async (requerimiento, respuesta) => {
    try {
      let new_Reaction = await Reaction.create(requerimiento.body);

      respuesta.status(201).json({
        id: new_Reaction._id,
        success: true,
        new_Reaction,
        message: "La reaccion se creó satisfactoriamente",
      });
    } catch (error) {
      console.log(error.message);
      respuesta.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async(req,res) => {

    let query = {};

    let user = req.user.id
   

    if(req.query.name){
      query = {
        ...query,
        name: { $regex: req.query.name, $options: "i" },
      };
    }
    if(req.query.itineraryId){
      query={
        ...query,
        itineraryId: req.query.itineraryId
      };
    }
    try {
      let reaction=await Reaction.find(query)

      if(reaction[0].userId.includes(user)){
          
          await Reaction.findOneAndUpdate({ "_id": reaction[0]._id },{ $pull:{ "userId": user } },{new:true});
          
          res.status(200).json({
            success: true,
            message: "Reaction has been pulled"
          })
      }
      else{

          await Reaction.findOneAndUpdate({_id:reaction[0]._id},{ $push:{ userId:user }},{new:true});
          res.status(200).json({
            success: true,
            message: "Reaction has been pushed"
          })
      }
      
  
    }
    catch(error){
      res.status(400).json({
        success: false,
        message: error.message,
    })
    }
  },
  read: async(req,res)=>{
    let query = {};
    if (req.query.itineraryId) {
      query = {
         ...query,
         itineraryId: req.query.itineraryId,
      };
    }
    if (req.query.userId) {
      query = {
         ...query,
         userId: req.query.userId,
      };
    }
    try {
        if(req.query.itineraryId){
        
          let reactions = await Reaction.find(query)
        
              if (reactions.length>0) {
                res.status(200).json({
                  reactions,
                  success: true,
                  message: "reactions were successfully found",
                });
              } else {
                res.status(404).json({
                  success: false,
                  message: "No reactions was found",
                });
              }
              
            }
        else if(req.query.userId){
            let reactions = await Reaction.find(query).populate({ path: 'itineraryId', select: 'name lastName photo -_id' })
                if (reactions.length > 0) {

                    res.status(200).json({
                        reactions,
                        success: true,
                        message: `All reactions`,
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'No reactions found',
                        data: [],
                    });
                }
          }
    }
      catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params

    try {
        let reaction = await Reaction.findOneAndUpdate({ _id: id }, { $pull: { userId: req.user.id } }, { new: true })
        if (reaction) {
            res.status(200).json({
                data: reaction,
                message: `reaction deleted`,
                success: true,
            })
        } else {
            res.status(404).json({
                message: `reactions not found`,
                success: false,
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
  },
}

module.exports = controller;