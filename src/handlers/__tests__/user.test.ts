import * as user from '../user';

describe('user handler', () => {
    it('user test should create a new user', async () => {
        const req = {body: {username: 'hello', password: 'h1'}}
        const res = {json({token}) {
            expect({token}).toBeTruthy()
        }}
        
        await user.createNewUser(req, res, () => {})
    })
})