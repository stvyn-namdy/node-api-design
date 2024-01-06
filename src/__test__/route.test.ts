import app from '../server';
import supertest from 'supertest';

describe('GET /', () => {
    it('check should send back some data', async () => {
        const res = await supertest(app)
        .get('/')

        expect(res.body.message).toBe('Hello from test...')
    })
})