const express = require('express')

require('./database')

class App{
    constructor(){
        this.server = express()
    }

    middlewares(){
        this.server.use(express.json())
    }

}

module.exports = new App().server