const app= require('../app')
const chai= require('chai');
const assert= chai.assert;
const request= require('supertest')

describe('GET /api/cities/',(done)=>{

    it('verificar que devuelve un array de objetos',(done)=>{
        request(app)
        .get('/api/cities/')
        .expect(response=>{
            assert.typeOf(response.body.allcities,'array','this is array')
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