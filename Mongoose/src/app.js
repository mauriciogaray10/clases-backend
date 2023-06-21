import express from "express";
import mongoose from "mongoose";
import { estudiantesModel } from "./models/estudiantes.model.js";

const app = express();

app.use(express.json());

const connection = mongoose.connect('mongodb+srv://garay17:hola123@cluster0.xmyrsuv.mongodb.net/?retryWrites=true&w=majority');

const students = [{"nombre":"Agnesse","apellido":"Blew","edad":52,"dni":58573928,"curso":"Account Representative", "nota":9},
{"nombre":"Alyda","apellido":"Smellie","edad":35,"dni":46041301,"curso":"Recruiting Manager","nota":9},
{"nombre":"Wynnie","apellido":"Bourgour","edad":57,"dni":55190481,"curso":"Structural Engineer","nota":9},
{"nombre":"Jacquelyn","apellido":"Ruberti","edad":31,"dni":54640875,"curso":"Nurse Practicioner","nota":9},
{"nombre":"Ibrahim","apellido":"O'Hickey","edad":31,"dni":42464540,"curso":"Programmer Analyst IV","nota":3},
{"nombre":"Faustine","apellido":"Woodhouse","edad":21,"dni":40720536,"curso":"Junior Executive","nota":9},
{"nombre":"Othello","apellido":"Bentje","edad":41,"dni":41603004,"curso":"Information Systems Manager","nota":8},
{"nombre":"Darline","apellido":"Simms","edad":39,"dni":53066922,"curso":"Cost Accountant","nota":4},
{"nombre":"Arlette","apellido":"Hullins","edad":44,"dni":58352327,"curso":"Electrical Engineer","nota":10},
{"nombre":"Delmore","apellido":"O'Cullen","edad":26,"dni":56229539,"curso":"Senior Cost Accountant","nota":4}]

app.post('/students/insertion', async (req, res)=>{

    let result = await estudiantesModel.insertMany(students)

    res.send({result})

})

 

app.post('/students', async (req, res)=>{

 

    const info = req.body

    let result = await estudiantesModel.create(info)

    res.send({result})

})

 

app.get('/students', async (req, res)=>{

    let result = await estudiantesModel.find()

    res.send({result})

})

 

app.put('/students/:id', async (req, res)=>{

    const id  = req.params.id

    const info = req.body

    let result = await estudiantesModel.updateOne({_id: id}, {$set: info})

    res.send({result})

})

 

app.delete('/students/:id', async (req, res)=>{

    const id  = req.params.id

    let result = await estudiantesModel.deleteOne({_id: id})

    res.send({result})

})



app.listen(8080, ()=>{
    console.log('Server is listening...');
})