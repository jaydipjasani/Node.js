const express = require('express');
require('./mongoose');
const product = require('./products');

const app = express();
app.use(express.json())

app.post('/create',async (req,resp)=>{

    let data = new product(req.body)
    let result = await data.save()
    resp.send("my response")

})

app.get('/list',async (req,resp)=>{

    let data = new product.find()
   
    console.log("data",data);

})


app.delete('/delete/:_id',async (req,resp)=>{

    let data = await product.deleteOne(req.params)
   
    console.log("data",data);

})

app.put('/update/:_id',async (req,resp)=>{

    let data = await product.updateOne(
        req.params,
        {$set : req.body}
    )
   
    console.log("data",data);

})

app.listen(3000)