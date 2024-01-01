import express from 'express';
import route from './Routers/index.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

const api = express();
dotenv.config();
api.use(morgan('dev'));
api.use(cors());
api.use(express.json());

api.get('/', function (req, res) {
    res.send('hi backend')
})
api.use('/api/v1', route);

mongoose.connect(process.env.MongoUrl).then(()=>console.log('Database Connected'))

api.listen(8000, () => console.log('port running on 8000'))