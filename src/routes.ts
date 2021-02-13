import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

const routes = Router()

routes.post(
  '/', multer().single('file'), (req, res)=>{

    return res.json({message: "hello world"})

  }
)

export default routes