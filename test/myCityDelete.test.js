const app= require('../app')
const request= require('supertest')

describe('DELETE /api/cities/6382a5a95ffe00d7e2b473d0',(done)=>{
    it("Delete a city successfully", function (done) {
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODVmOTg4NDk3NTQ5M2UyZjA5MTg5ZiIsIm5hbWUiOiJNYXRpYXMiLCJwaG90byI6Imh0dHBzOi8vd3d3LmJlZnVua3kuY29tL2ltYWdlcy9wcmlzbWljLzVkZGZlYTQyLTczNzctNGJlZi05YWM0LWYzYmQ0MDdkNTJhYl9sYW5kaW5nLXBob3RvLXRvLWNhcnRvb24taW1nNS5qcGVnP2F1dG89YXZpZix3ZWJwJmZvcm1hdD1qcGcmd2lkdGg9ODYzIiwiaWF0IjoxNjY5NzI3MjA4LCJleHAiOjE2Njk4MTM2MDh9.EZ4tc4gjA71NFIq0o3iK9l-tmnh2__8mKbv0MEtkj5A'
        idItinerary = '638608e357d56bb6b2bfb97e'
        request(app)
            .delete(`/api/itineraries/${idItinerary}`)
            .auth(token, { type: "bearer" })
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
})