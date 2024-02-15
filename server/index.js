import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { auth_routes } from './routes/index.js';

//local imports


dotenv.config();
const app = express();

const CONNECTION_URL = process.env.CONNECTION_URL;
console.log(CONNECTION_URL)

const connection_url_1 = '';
const connection_url_2 = '';

const port = 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use('/auth', auth_routes);

mongoose.connect(CONNECTION_URL)
    .then(()=>app.listen(port, () => {console.log('app is listining on port 5000')}))
    .catch((e) => {
        console.log(e);
    })