import app from '../server'

import supertest from 'supertest'

const request = supertest(app);

const username = "anshul2534";
const password = "123";
test("fetch users", async (done) = &gt; {

    request
      .post("/graphql")
      .send({
        query: "{ login{ username:username, password:password} }",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.data.users.length).toEqual(3);
        done();
      });
  });