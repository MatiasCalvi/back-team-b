let cities=[
	{

        "name": "London",
        "continent": "Europe",
        "photo": "https://images.pexels.com/photos/221166/pexels-photo-221166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":  9002488 ,
        "userId":  "636d60bb6fe8198f1d547bf4"  
	},
	{

        "name": "Paris",
        "continent": "Europe",
        "photo": "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":  	2240621  ,
        "userId":  "636d60bb6fe8198f1d547bf3"
	},
	{

        "name": "Moscow",
        "continent": "Europe",
        "photo": "https://images.pexels.com/photos/3629813/pexels-photo-3629813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":  25121000 ,
        "userId":  "636d60bb6fe8198f1d547bf4" 
	},
	{

        "name": "Dubai",
        "continent": "Asia",
        "photo": "https://images.pexels.com/photos/1089645/pexels-photo-1089645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":3478300 ,
        "userId":"636d60bb6fe8198f1d547bf1"  
	},
	{
        "name":"Tokyo",
        "continent":"Asia",
        "photo": "https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":14215906 ,
        "userId":"636d60bb6fe8198f1d547bf2" 
	},
	{
        "name":"Singapore",
        "continent":"Asia",
        "photo":"https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":5677000 ,
        "userId":"636d60bb6fe8198f1d547bf1"
	},
	{
        "name":"Barcelona",
        "continent":"Europe",
        "photo":"https://images.pexels.com/photos/1782436/pexels-photo-1782436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":1636732  ,
        "userId":"636d60bb6fe8198f1d547bf2" 
	},
        {
        "name":"Luxor",
        "continent":"America",
        "photo":"https://images.pexels.com/photos/6102263/pexels-photo-6102263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":1328429 ,
        "userId":" 636d60bb6fe8198f1d547bf4" 
        },
	{
        "name":"Lima",
        "continent":"America",
        "photo":"https://images.pexels.com/photos/5198285/pexels-photo-5198285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":9943800 ,
        "userId":"636d60bb6fe8198f1d547bf3"  
	},	
        {

        "name":"Rome",
        "continent":"Europe",
        "photo":"https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":2857321 ,
        "userId":"636d60bb6fe8198f1d547bf3" 
	},
	{

        "name":"Doha",
        "continent":"Asia",
        "photo":"https://images.pexels.com/photos/6562904/pexels-photo-6562904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":998651 ,
        "userId":"636d60bb6fe8198f1d547bf2"
	},
	{

        "name":"Marrakech",
        "continent":"Africa",
        "photo": "https://images.pexels.com/photos/13759765/pexels-photo-13759765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":1070838  ,
        "userId":"636d60bb6fe8198f1d547bf3"  
	}
]
require("dotenv").config();
require("../../config/database");
const City = require("../City");

cities.forEach((element) => {
    City.create({
    name: element.name,
    continent: element.continent,
    photo: element.photo,
    population: element.population,
    userId: element.userId,
  });
});