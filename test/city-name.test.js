const app= require('../app')
const chai= require('chai');
const assert= chai.assert;
const request= require('supertest')

describe('POST /api/cities/',(done)=>{
    let city={
        "name":"Rome",
        "continent":"Europe",
        "photo":"https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "population":2857321 ,
        "userId":"636d60bb6fe8198f1d547bf3" 
    }
    it('verificar que el usuario complete el campo name con un string',(done)=>{
        request(app)
        .post('/api/cities/')
        .send(city)
        .expect(response=>{
            assert.isString(response.body.new_City.name)
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