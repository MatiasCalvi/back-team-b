const app= require('../app')
const request= require('supertest')

describe('DELETE /api/hotels/638444ac3a8cde31acbfe7f0',(done)=>{
    it('hotel deleted successfully',(done)=>{
        token = 'AGREGAR TOKEN ACA, CON FECHA SUPERIOR A 1 DIA '
        idHotel = 'AGREGAR ID DE HOTEL ACA PARA ELIMINAR'
        request(app)
        .delete(`/api/cities/${idHotel}`)
        .auth(token, { type: "bearer" })
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