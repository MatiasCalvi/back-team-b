const app= require('../app')
const request= require('supertest')

describe('DELETE /api/hotels/638444ac3a8cde31acbfe7f0',(done)=>{
    it('hotel deleted successfully',(done)=>{
        request(app)
        .delete('/api/hotels/638444ac3a8cde31acbfe7f0')
        .expect(200)
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            console.log
        })
        done();
    })

})