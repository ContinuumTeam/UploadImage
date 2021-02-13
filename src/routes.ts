import { Router } from 'express'

const routes = Router()

routes.post(
  '/', (req, res)=>{

    return res.json({message: "hello world"})

  }
)

export default routes