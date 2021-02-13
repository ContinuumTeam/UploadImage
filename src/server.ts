import express from 'express'
import routes from './routes'
import morgan from 'morgan'
import mongoose from 'mongoose'

const app = express()

mongoose.connect('mongodb://localhost:27017/upload', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(routes)

app.listen(3333)