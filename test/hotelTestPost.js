const app = require ('../app')
const chai = require ('chai')
const assert = chai.assert;
const request = require ('supertest');
const { response } = require('../app');



describe('POST /api/hotels/', function (done) {
    let hotel = {
        "name": "h0telazo00",
        "photo":"https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "capacity": 5000,
        "cityId": "636d74793faeebf1630cf64d",
        "userId": "636d60bb6fe8198f1d547bf3",
    }
        it('Must Respond with 201', function (done) {
        request(app)
            .post ('/api/hotels/')
            .send (hotel)
            .expect(201)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })

    })
})


 describe('POST /api/hotels/',(done)=>{
  let hotel = {
    "name": "h0telazo000",
    "photo":"https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "capacity": 5000,
    "cityId": "636d74793faeebf1630cf64d",
    "userId": "636d60bb6fe8198f1d547bf3",
}
  it('verificar que el usuario complete el campo name con un string',(done)=>{
      
    request(app)
      .post('/api/hotels/')
      .send(hotel)
      .expect(response=>{
          assert.isNumber(response.body.new_hotel.capacity)
      })
      .end((err,res)=>{
          if(err){
              return done(err);
          }
          console.log
          done();
      })
  })


})

