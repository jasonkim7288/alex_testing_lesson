let { repeatMessage } = require('../source/index');

test('Name for an example test', () => {
  expect('This is a truthy string').toBeTruthy();
})

describe('repeatMessage block of multiple test', () => {
 test('repeatMessage functionality', () => {
    expect(repeatMessage('hello', 3)).toEqual('hellohellohello');
    expect(repeatMessage('hello', 0)).toEqual('');
    expect(repeatMessage('hello', 0)).not.toEqual('d');
  })
  test('should be a function', () => {
    expect(typeof repeatMessage).toBe('function');
  })
});



const request = require('supertest')
var { app, server } = require('../source/index')

afterAll(async done => {
  await server.close();

  await new Promise(resolve => setTimeout(() => resolve(), 500));

  done();
})

describe('express test', () => {
  test('should show the phrase', async (done) => {
    const response = await request(app).get('/');
    expect(response.statusCode).toEqual(200);
    done();
  })

  test('should return the phrase "Hello World!"', async (done) => {
    const response = await request(app).get('/');
    expect(response.body.msg).toEqual("Hello World!");
    done();
  })

  test('should return the phrase "Hello World!"', async (done) => {
    const response = await request(app)
      .post('/studentNames')
      .send({
        studentNames: ["Luke", "Ash", "Nands"]
      });
    expect(response.body.firstStudentName).toEqual("Luke");
    done();
  })

})
