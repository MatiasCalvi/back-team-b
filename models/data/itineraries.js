let itineraries = [
  {
    cityId: "636d78ea41ef42fa20b039e0",
    name: "The Kremlin",
    photo: [
      "https://images.pexels.com/photos/3810856/pexels-photo-3810856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/372297/pexels-photo-372297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7015780/pexels-photo-7015780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    description:
      "The Kremlin is a fortified complex in the center of Moscow founded by the Rurik dynasty. It is the best known of the kremlins, and includes five palaces, four cathedrals, and the enclosing Kremlin Wall with Kremlin towers.",
    price: 40,
    duration: 2,
    userId: "636d60bb6fe8198f1d547bf4",
  },
  {
    cityId: "636d78ea41ef42fa20b039e0",
    name: "State Historical Museum",
    photo: [
      "https://images.pexels.com/photos/10177712/pexels-photo-10177712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5057622/pexels-photo-5057622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/11066629/pexels-photo-11066629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    description:
      "The State Historical Museum of Russia is a museum of Russian history located between Red Square and Manege Square in Moscow. The museum's exhibitions range from relics of prehistoric tribes that lived in the territory of present-day Russia, to priceless artworks acquired by members of the Romanov dynasty.",
    price: 35,
    duration: 3,
    userId: "636d60bb6fe8198f1d547bf4",
  },
  {
    cityId: "636d78ea41ef42fa20b039e1",
    name: "Legoland Water Park",
    photo: [
      "https://images.pexels.com/photos/1291448/pexels-photo-1291448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3453009/pexels-photo-3453009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    description:
      "LEGOLAND® Water Park Dubai is the only UAE water park designed especially for kids aged 2-12 and their families with over than 20 water slides and attractions.",
    price: 730,
    duration: 6,
    userId: "636d60bb6fe8198f1d547bf1",
  },
  {
    cityId: "636d78ea41ef42fa20b039e1",
    name: "Balloon Adventures Dubai",
    photo: [
      "https://www.pexels.com/photo/hot-air-balloon-under-grey-sky-2563686/",
      "https://www.pexels.com/photo/colorful-air-balloons-flying-over-old-eastern-city-6118899/",
      "https://www.pexels.com/photo/multicolored-hot-air-balloons-3389955/",
    ],
    description:
      "Balloon Adventures Dubai provides unforgettable and luxurious hot air balloon flights over the Dubai desert. The pristine desert hosts a unique landscape for hot air ballooning in Dubai. As the longest operating balloon company in the United Arab Emirates, we are the experts in flying in Dubai and ensure that your once-in-a-lifetime experience is safe at all times. ",
    price: 310,
    duration: 3,
    userId: "636d60bb6fe8198f1d547bf1",
  },
  {
    cityId: "636d78ea41ef42fa20b039e2",
    name: "Senso-ji",
    photo: [
      "https://images.pexels.com/photos/2563686/pexels-photo-2563686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5737359/pexels-photo-5737359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6114840/pexels-photo-6114840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    description:
      "Sensō-ji is a Buddhist temple located in Asakusa, Tokyo, Japan. It is the oldest temple in Tokyo and one of the most important. It is associated with the Tendai Buddhist sect, from which it became independent after World War II. Next to the temple is the Asakusa Shinto Shrine.",
    price: 70,
    duration: 3,
    userId: "636d60bb6fe8198f1d547bf2",
  },
  {
    cityId: "636d78ea41ef42fa20b039e2",
    name: "Sakurai Tea Experience",
    photo: [
      "https://images.pexels.com/photos/9795370/pexels-photo-9795370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7300476/pexels-photo-7300476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7300469/pexels-photo-7300469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    description:
      "At Sakurai, guests can experience freshly roasted Japanese tea blends in an intimate setting and indulge themselves in a carefully curated multi-sensory experience involving taste, smell, sound, touch and the visual experience. The concept of Sakurai is to push the ancient tradition of tea ceremony into a modern environment and creating a holistic experience which extends from the tea and sweets, to the design of the tea utensils, the packaging, interior design and more. ",
    price: 250,
    duration: 2,
    userId: "636d60bb6fe8198f1d547bf2",
  },
  {
    cityId: "636d78ea41ef42fa20b039e4",
    name: "Casa Batlló",
    photo: [
      "https://images.pexels.com/photos/175934/pexels-photo-175934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/11745012/pexels-photo-11745012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5862142/pexels-photo-5862142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    description:
      "Casa Batlló is a building designed by the architect Antoni Gaudí, the highest representative of Catalan modernism. It is a comprehensive remodeling of a previously existing building on the site, the work of Emilio Sala Cortés.",
    price: 30,
    duration: 2,
    userId: "636d60bb6fe8198f1d547bf2",
  },
  {
    cityId: "636d78ea41ef42fa20b039e4",
    name: "Basílica de la Sagrada Família",
    photo: [
      "https://images.pexels.com/photos/4946698/pexels-photo-4946698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4675333/pexels-photo-4675333.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/12823989/pexels-photo-12823989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    description:
      "The Expiatory Temple of the Sagrada Familia, known simply as the Sagrada Familia, is a Catholic basilica in Barcelona, ​​designed by the architect Antoni Gaudí. Started in 1882, it is still under construction. It is Gaudí's masterpiece and the greatest exponent of Catalan modernist architecture.",
    price: 25,
    duration: 4,
    userId: "636d60bb6fe8198f1d547bf2",
  },
  {
    cityId: "636d78ea41ef42fa20b039e7",
    name: "Coliseo de Roma",
    photo: [
      "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/12587735/pexels-photo-12587735.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4859881/pexels-photo-4859881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    description:
      "The Colosseum or Flavian Amphitheater is an amphitheater from the time of the Roman Empire, built in the 1st century. It is located in the east of the Roman Forum, and was the largest of those built in the Roman Empire.",
    price: 60,
    duration: 3,
    userId: "636d60bb6fe8198f1d547bf3",
  },
  {
    cityId: "636d78ea41ef42fa20b039e7",
    name: "Fontana di Trevi",
    photo: [
      "https://images.pexels.com/photos/2031967/pexels-photo-2031967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2885919/pexels-photo-2885919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5067076/pexels-photo-5067076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    description:
      "The Fontana di Trevi, with nearly 40 meters of frontage, is one of the largest monumental Baroque fountains in Rome. According to the current administrative division of the center of Rome.",
    price: 20,
    duration: 1,
    userId: "636d60bb6fe8198f1d547bf3",
  },
  {
    cityId: "636d78ea41ef42fa20b039e8",
    name: "3-2-1 Qatar Olympic and Sports Museum ",
    photo: [
      "https://images.pexels.com/photos/2127038/pexels-photo-2127038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7387470/pexels-photo-7387470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/12074226/pexels-photo-12074226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    description:
      "A member of Qatar Museums, the 3-2-1 Qatar Olympic and Sports Museum is a national and international centre for sports history, heritage and knowledge, promoting and encouraging academic research. It is also a member of the Olympic Museum Network, which currently unites 22 Olympic museums worldwide.",
    price: 100,
    duration: 1,
    userId: "636d60bb6fe8198f1d547bf2",
  },
  {
    cityId: "636d78ea41ef42fa20b039e8",
    name: "Qatar national museum",
    photo: [
      "https://images.pexels.com/photos/3789026/pexels-photo-3789026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/11696998/pexels-photo-11696998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/277054/pexels-photo-277054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    description:
      "The National Museum of Qatar (NMoQ) gives voice to Qatar’s rich heritage and culture. We welcome diverse communities to our vibrant and immersive space to come together to experience Qatar’s past, present and future.",
    price: 50,
    duration: 2,
    userId: "636d60bb6fe8198f1d547bf2",
  },
];

require ('dotenv').config()
require ('../../config/database')

const Itinerary = require('../Itinerary')

itineraries.forEach((element)=>{
	Itinerary.create({
        cityId:element.cityId,
        name:element.name,
	    photo:element.photo,
        description:element.description,
        price:element.price,
	    duration:element.duration,
        userId:element.userId,
    })
})
