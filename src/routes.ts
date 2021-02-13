import { Router } from 'express'
import multer from 'multer'

import multerConfig from './config/multer'
import Post from './models/Post'


const routes = Router()

routes.post(
  '/posts', multer(multerConfig).single('file'), async (req, res)=>{
    // console.log(req.file);
    const post = await Post.create({
      name: req.file.originalname,
      size: req.file.size,
      key: req.file.filename,
      url:''
    })

    return res.json(post)

  }
)

export default routes