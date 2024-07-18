import express from 'express'

const app = express()

app.get('/',(req, res)=>{
    res.send('hi server')
})

app.listen(3002,()=>{
    console.log('server init on port 3002')
})