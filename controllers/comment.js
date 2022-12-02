const Comment = require ('../models/Comment');

const CommentController = {
  create: async (req, res) => {
    try {
      let new_comment= await Comment.create(req.body);
      res.status(201).json({
        new_comment,
        success: true,
        message: "you have posted a Comment",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "The comment could not be posted",
      });
    }
  },
  read: async (req, res) => {
    let query = {};
    if (req.query.showId) {
      
      query = {
        ...query,
        showId: req.query.showId,
      };
    }
    try {
      let comments = await Comment.find(query)
      if (comments) {
        res.status(200).json({
          comments,
          success: true,
          message: "comments are found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  deleted: async(req,res)=>{
    let {id} = req.params
    try {
      let uno = await Comment.findOneAndDelete({_id: id})
  if(uno){
    res.status(200).json({
      id: uno._id,
      success: true,
      message: "comment deleted succesfully"
    })
  }else{
    res.status(404).json({
      success: false,
      message: "comment not found"
    })
  }
    } catch (error) {
      res.status(400).json({
        success:false,
        menssage:error.message
      })

    }
  },
update: async(req,res)=>{
  let {id} = req.params
  try {
    let uno = await Comment.findOneAndUpdate({_id: id},req.body,{new:true})
if(uno){
  res.status(200).json({
    id: uno._id,
    success: true,
    message: "comment edited succesfully"
  })
}else{
  res.status(404).json({
    success: false,
    message: "coment not found"
  })
}
  } catch (error) {
    res.status(400).json({
      success:false,
      menssage:error.message
    })

  }
}
};


module.exports = CommentController