import multer from 'multer'
import path from 'path'

module.exports = {
    storage:multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'temp', 'uploads', 'hosts_images'),
        filename:(req, file, cb)=>{
            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext)

            cb(null, `${name}-${Date.now()}${ext}`)
        }
    })
}