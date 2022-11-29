const app= require('../app')
const request= require('supertest')

describe('DELETE /api/cities/6382a5a95ffe00d7e2b473d0',(done)=>{
    it("Delete a city successfully", function (done) {
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODExY2YwZmY5MmM4NTgxNjRmNDVhNSIsImlhdCI6MTY2OTU5NzQ5OSwiZXhwIjoxNjY5NjgzODk5fQ.5Uyw-rM2OtbUE7YnKhuLzuM042qU2LJnXNZn9NLXr8s'
        idCity = '63840474bbf3905fd9e045e7'
        request(app)
            .delete(`/api/cities/${idCity}`)
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