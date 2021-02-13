import multer from 'multer'
import path from 'path'

export default {
  dest: path.join(__dirname, "..", "..", "upload"),
  storage: multer.diskStorage({
    destination: (req, file, call) =>{
      call(null, path.join(__dirname,"..", "..", "upload"))
    },
    filename: (req, file, call) =>{

      const fileName = `${Date.now()}-${file.originalname}`
      call(null, fileName)

    }
  }),
  limits:{
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, call) => {
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
}