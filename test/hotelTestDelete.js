const app= require('../app')
const request= require('supertest')

describe('DELETE /api/hotels/6382e74343f2ec2b3a39de67',(done)=>{
    it('hotel deleted successfully',(done)=>{
        request(app)
        .delete('/api/hotels/6382e74343f2ec2b3a39de67')
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