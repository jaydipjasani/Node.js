const express = require('express');
const dbConnect = require('./mongoDB');

//import bcz in delete we are delete record using id and id is always object so need mongodb
const mongodb = require('mongodb')
const app = express();

// Used to JSON parse stringify data
app.use(express.json());

//Get data from database and send to user

// app.get('/', async (req,resp)=>{
//     let data= await dbConnect();
//     let result = await data.find().toArray();
//     resp.send(result)
// })

// Insert data into Database which are get by user/postman

app.post('/', async (req,resp)=>{
    let data= await dbConnect();
    let result = await data.insertOne(req.body);
    resp.send(result)
})

// Update data into Database 

app.put('/', async (req,resp)=>{
    let data= await dbConnect();
    let result = await data.updateOne(
        {name : req.body.name},
        {$set : req.body}
    );
    resp.send(result)
})

// Delete Data into Database

app.delete('/', async (req,resp)=>{
    let data= await dbConnect();
    let result = await data.deleteOne(
        {name : req.body.name}
    )
    resp.send(result)
})

// If want to delete take id from url and delete that record

app.delete('/:id', async (req,resp)=>{
    let data= await dbConnect();
    let result = await data.deleteOne(
        { _id: new mongodb.ObjectId(req.params.id)}
    )
    resp.send(result)
})


app.listen(5000)