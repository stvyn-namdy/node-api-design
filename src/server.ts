import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth'
import { createNewUser, signin } from './handlers/user';

const app = express();

//Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Error handler
app.get('/', (req, res, next) => {
    res.json({message: 'hello'})
})

app.use('/api', protect, router);

//User Routes
app.post('/user', createNewUser)
app.post('/signin', signin)

app.use((err, req, res, next) => {
    if (err.type === 'auth') {
        res.status(401).json({message: 'Unauthorized access'})
    } else if (err.type === 'input') {
        res.status(400).json({message: 'Invalid input. Try again'})
    } else {
        res.status(500).json({message: `That's on us.`})
    }
})

export default app;