import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

export default {
  dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
  storage: multer.diskStorage({}),
  limits:{
    fileSize: 2 * 1024 +1024
  },
  fileFilter: (req: any, file: any, call: any) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "imgae/gif"
    ]

    if (allowedMimes.includes(file.mimetype)){
      call(null, true)
    } else{
      call(new Error("invalid file"))
    }
  },
  filename: (request: any, file: any, cb: any) =>{
      const fileName = `${Date.now()}-${file.originalname}`

      cb(null, fileName)
  }
}