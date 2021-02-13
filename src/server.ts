import express from 'express'

const app = express()

app.get('/', (req, res)=>{

  console.log('server rodando');
  

  return res.json({message: "hello world"})
})
app.listen(3333)