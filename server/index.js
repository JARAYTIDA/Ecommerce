import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());

app.get('/', (req, res)=>{
    console.log('hello from server');
    res.json({message:'hello from server'})
})

app.listen(5000, ()=>{
    console.log('app is listining on port 5000')
})