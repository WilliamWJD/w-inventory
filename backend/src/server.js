const app = require('./app')

const port = process.env.PORT_SERVER || 3333

app.listen(port,()=>{
    console.log(`Servidor online`)
})