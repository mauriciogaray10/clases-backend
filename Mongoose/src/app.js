import express from 'express';
import userRouter from './models/user.model.js';
import mongoose  from 'mongoose';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.listen(8080, ()=>{
    console.log('server is listening...');
})


mongoose.connect('mongodb+srv://garay17:hola123@cluster0.xmyrsuv.mongodb.net/?retryWrites=true&w=majority', (error)=>{
    if(error){
        console.log('Cannot connect to database: ' + error)
        process.exit()
    }
})


app.use('/api/users', userRouter);