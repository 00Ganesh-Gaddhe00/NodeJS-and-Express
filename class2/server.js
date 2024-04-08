const express = require('express');

const app = express();


//middleware

const loggerMiddleware = (req,res,next)=>{
    //   console.log('logger middle ware is used')
    console.log(req.ip,req.hostname, req.method, req.url)
    const date = new Date();
    console.log(date)
      next();
}

const authMiddleware = (req, res, next)=>{
    console.log(req.query)
    const password = req.query.pass
    console.log(password);
    if(password==='123'){
        next()
    }else{
        res.send("Cant autorize, incorrect passowrd")
    }
}

app.use(loggerMiddleware);
// app.use(authMiddleware);
// app.use(express.static("public"))


//define a route
app.get('/',(req, res)=>{
    res.send({'name':'Alex'})
})

app.put('/', (req, res)=>{
    res.send({'type':"put"})
})

app.post('/',authMiddleware, (req,res)=>{
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