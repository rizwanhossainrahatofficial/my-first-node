const express = require('express')
const app = express();
const port=3000;

// const handle=(req,res)=>{
//     res.send('hello from node')
// }

// app.get('/',handle)

app.get('/',(req,res)=>{
    res.send('hello from my first node')
});

app.listen(port,()=>{
    console.log('listening port',port)
})