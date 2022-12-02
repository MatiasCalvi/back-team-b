let comments=[
  {
    "showId":"638458ef3a8cde31acbfe7f6" ,
    "userId":"636d60bb6fe8198f1d547bf1",
    "date": new Date ("2020-03-12"),
    "comment": "me pase todo el sonic, me gano un japo. sega se murio para mi"
  },
  {
    "showId":"636e7ba1d9464282b865e9d1" ,
    "userId":"636d60bb6fe8198f1d547bf4",
    "date": new Date ("2021-03-12"),
    "comment": "se me escapo la pelota y el perro la busco, tuvimos que juntar los pedazos de Tobby con cuchara."
  }
	
]
require("dotenv").config();
require("../../config/database");
const Comment = require("../comment");

comments.forEach((element) => {
    Comment.create({
    showId: element.showId ,
    userId: element.userId,
    date:element.date,
    comment: element.comment,
  });
});