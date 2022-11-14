let users = [
	{
		"name": "Sasha",
		"lastName": "Keller",
        "role": "admin",
        "photo": "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"age": 46,
		"email": "tortor.at@outlook.couk",
		"password": "amet2",
        "country":"Uruguay",
		"code": "magnatellusfaucibusleo",
		"verified": true,
		"logged": true
	},
	{
		"name": "Lane",
		"lastName": "Buckley",
        "role":"admin",
        "photo":"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
		"age": 30,
		"email": "et.pede.nunc@google.net",
		"password": "velitPellentesque",
        "country":"EEUU",
		"code": "Nuncmauris",
		"verified": true,
		"logged": true
	},
	{
		"name": "Isadora",
		"lastName": "Haley",
        "role":"admin",
        "photo": "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
		"age": 25,
		"email": "orci@yahoo.org",
		"password": "velfaucibusid",
        "country":"Colombia",
		"code": "quisaccumsan",
		"verified": true,
		"logged": true
	},
	{
		"name": "Jescie",
		"lastName": "Hawkins",
        "role":"admin",
        "photo": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
		"age": 57,
		"email": "duis@protonmail.couk",
		"password": "nostraperinceptos",
        "country":"EEUU" ,
		"code": "enim.Sednulla",
		"verified": true,
		"logged": true,
	},
    {
		"name": "Hayes",
		"lastName": "Nieto",
        "role":"user",
        "photo": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"age": 33,
		"email": "sem.semper@yahoo.edu",
		"password": "magna.",
        "country":"España" ,
		"code": "bibendumsedest.Nunc",
		"verified": true,
		"logged": true
	},
	{
		"name": "Carson",
		"lastName": "Alonso",
        "role":"user",
        "photo": "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
		"age": 42,
		"email": "lacinia.at@icloud.net",
		"password": "sitamet",
        "country":"Alemania",
		"code": "nullamagnamalesuada",
		"verified": true,
		"logged": true
	},
	{
		"name": "Hedley",
		"lastName": "Ramirez",
        "role":"user",
        "photo": "https://images.pexels.com/photos/227294/pexels-photo-227294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"age": 30,
		"email": "vivamus.nisi.mauris@aol.edu",
		"password": "maurissagittisplacerat",
        "country":" Lituania",
		"code": "vestibulum.Mauris",
		"verified": true,
		"logged": true
	},
	{
		"name": "Holly",
		"lastName": "Gomez",
        "role":"user",
        "photo": "https://images.pexels.com/photos/1362724/pexels-photo-1362724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"age": 35,
		"email": "parturient.montes@hotmail.edu",
		"password": "etultrices",
        "country":"Mexico",
		"code": "Suspendisseseddolor.",
		"verified": true,
		"logged": true
	}
]

require ('dotenv').config()
require ('../../config/database')

const User = require('../User')

users.forEach((element)=>{
	User.create({
        name:element.name,
        lastName:element.lastName,
        role:element.role,
		photo:element.photo,
        age:element.age,
        email:element.email,
        password:element.password,
		country:element.country,
        code:element.code,
        verified:element.verified,
        logged:element.logged,
    })
})

module.exports = User