const { isTheUser, notFound } = require("../config/responses");

const isTheSameUser = model => [
  async (req, res, next) => {
    let activity = await model.findOne({ _id: req.params.id });
    
    if (activity) {
      if (Array.isArray(activity.userId)) {
        let response = activity.userId.find(user => user.equals(req.user.id))
       
        if (response){
          return next()
        } else {
          return isTheUser(req, res);
        }
      } else {
        if (activity.userId.equals(req.user.id)) {
          return next()
        } else {
          return isTheUser(req, res);
        }
      }
    }
    return notFound(req, res);
  },
];


module.exports = isTheSameUser;