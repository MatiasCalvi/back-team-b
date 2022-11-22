const app = require ('../app')
const chai = require ('chai')
const assert = chai.assert;
const request = require ('supertest');
const { response } = require('../app');


describe('GET /api/hotels?name=safnoasf', function () {
    it('Must respond with 404 status code', function (done) {
       
        
        request(app)
            .get ('/api/hotels?name=safnoasf')
            .expect(404)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })
    })

})

