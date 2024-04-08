const express = require('express');

const app = express();

//define a route
app.get('/',(req, res)=>{
    res.send({'name':'Alex'})
})

app.put('/', (req, res)=>{
    res.send({'type':"put"})
})

app.post('/', (req,res)=>{
    res.send({'type':'post'})
})

app.delete('/',(req,res)=>{
    res.send({'type':'delete'})
})
app.get('/about', (req,res)=>{
    res.send("this is about data or page")
})

app.post('/data',(req,res)=>{
    res.send("this is the data for data page")
})

//start server
app.listen(8082,()=>{
    console.log('u got my attention');
})