let show = [
	{
        "hotelId": "636e6c0024718d06a476148d",
        "name": "Sega Championship",
        "description": "Gamers from all over the world come to play the Sonic the Hedgehog tournament sponsored by sega ",
        "photo": "https://www.katherinetimes.com.au/images/transform/v1/crop/frm/silverstone-feed-data/b591af6a-60a6-4414-a475-98b435c2eb85.jpg/r0_0_800_600_w800_h600_fmax.jpg",
        "price": 130,
        "date": new Date ("2020-07-23"),
        "userId":  "636d60bb6fe8198f1d547bf4"
	},
	{
        "hotelId": "636e6c0024718d06a476148d",
        "name": "Kabuki in the hotel",
        "description": "come to see one of japan's classic cultural attractions, the kabuki theater",
        "photo": "https://i0.wp.com/www.geek-otaku-news.com/wp-content/uploads/2019/12/GON_Kabuki.jpg?w=1140&ssl=1",
        "price": 60,
        "date": new Date ("2021-05-12"),
        "userId":  "636d60bb6fe8198f1d547bf4"
	},
	{
        "hotelId": "636e6c0024718d06a476148b",
        "name": "Hudson Tavern Doha watch party",
        "description": "come watch the world cup football matches in our tavern with people from all over the world.",
        "photo": "https://www.pexels.com/photo/friends-at-a-bar-smiling-3851358/",
        "price": 100,
        "date": new Date ("2022-07-05"),
        "userId":  "636d60bb6fe8198f1d547bf2"
	},
	{
        "hotelId": "636e6c0024718d06a476148b",
        "name": "Tennis in the sky",
        "description": "the unique experience of playing tennis in the sky can be real thanks to our facilities, you can't miss it.",
        "photo": "https://weburbanist.com/wp-content/uploads/2015/02/sky-high-tennis.jpg",
        "price": 100,
        "date": new Date ("2022-02-26"),
        "userId":  "636d60bb6fe8198f1d547bf1"
	},
    {
        "hotelId": "636e6c0024718d06a4761490",
        "name": "belly dance session",
        "description": "A dance session demonstrating the classical skills of this ancient dance.",
        "photo": "https://www.pexels.com/photo/monochrome-photography-of-women-performing-on-stage-1250653/",
        "price": 150,
        "date": new Date ("2022-06-08"),
        "userId":  "636d60bb6fe8198f1d547bf3"
	},
    {
        "hotelId": "636e6c0024718d06a4761490",
        "name": "a night with Zahi Hawass",
        "description": "a night where Zahi will tell you all the details about Egypt and its pharaohs",
        "photo": "https://www.pexels.com/photo/low-angle-photography-of-camel-194455/",
        "price": 260,
        "date":new Date ("2021-08-27"),
        "userId":  "636d60bb6fe8198f1d547bf3"
	},
    {
        "hotelId": "636e6c0024718d06a4761494",
        "name": "gourmet cooking demo",
        "description": "our chefs teach how to make our dishes, with practical and theoretical classes",
        "photo": "https://www.pexels.com/photo/man-and-woman-wearing-black-and-white-striped-aprons-cooking-2696064/",
        "price": 300,
        "date": new Date ("2021-04-15"),
        "userId":  "636d60bb6fe8198f1d547bf1"
	},
    {
        "hotelId": "636e6c0024718d06a4761494",
        "name": "Musical afternoon",
        "description": "the musical classic of paris, les miserables, in a private session",
        "photo": "https://www.pexels.com/photo/empty-seat-391535/",
        "price": 80,
        "date": new Date ("2022-01-10"),
        "userId":  "636d60bb6fe8198f1d547bf2"
	},
    {
        "hotelId": "636e6c0024718d06a476148c",
        "name": "Arm wrestling at the bar",
        "description": "come and test your arm strength in a arm wrestling competition held in the hotel bar",
        "photo": "https://www.pexels.com/photo/men-arm-wrestling-at-a-bar-3851378/",
        "price": 20,
        "date": new Date ("2020-10-20"),
        "userId":  "636d60bb6fe8198f1d547bf2"
	},
    {
        "hotelId": "636e6c0024718d06a476148c",
        "name": "Magic show with Dynamo",
        "description": "a spectacular magic show from one of london's most renowned magicians",
        "photo": "https://www.pexels.com/photo/playing-cards-on-black-surface-127053/",
        "price": 30,
        "date": new Date ("2022-03-27"),
        "userId":  "636d60bb6fe8198f1d547bf1"
	},
    {
   
        "hotelId": "636e6c0024718d06a4761491",
        "name": "EXPO PESCA & ACUIPERU 2022",
        "description": "EXPO PESCA & ACUIPERU 2022 happens in Lima, Peru Nov, 2022 focus on Fish Supplies,Snack Machines. The cycle of the trade fair is , organize by Thais Corporation S.A.C. at our Hotel.",
        "photo": "https://www.pexels.com/photo/group-of-people-inside-building-301930/",
        "price": 400,
        "date": new Date ("2021-05-25"),
        "userId":  "636d60bb6fe8198f1d547bf4"
	},
    {
        "hotelId": "636e6c0024718d06a4761491",
        "name": "Expo Cafe Peru ",
        "description": "Expo Cafe Peru aims to promote coffee identity and culture by integrating producers and consumers into a sustainable chain, promote the productivity and competitiveness of the sector, coffee as a flagship product, and within the framework of the commemoration of Peru's Bicentennial, articulate the various actions and initiatives of companies, cooperatives, tasters, public and cooperation institutions in the promotion of Peruvian coffee.",
        "photo": "https://www.pexels.com/photo/two-persons-in-a-restaurant-1055054/",
        "price": 250,
        "date": new Date ("2022-03-12"),
        "userId":  "636d60bb6fe8198f1d547bf3"
	}
]



require ('dotenv').config()
require ('../../config/database')

const Show = require('../Show')

show.forEach((element)=>{
	Show.create({
        hotelId:element.hotelId,
        name:element.name,
        description:element.description,
	photo:element.photo,
        price:element.price,
	date:element.date,
        userId:element.userId,
    })
})

module.exports = show