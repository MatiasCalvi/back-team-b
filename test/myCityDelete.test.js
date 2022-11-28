const app= require('../app')
const request= require('supertest')

describe('DELETE /api/cities/6382a5a95ffe00d7e2b473d0',(done)=>{
    it('verificar que se elimine ciudad',(done)=>{
        request(app)
        .delete('/api/cities/6382a5a95ffe00d7e2b473d0')
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