require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const models = require('./models/models')
const router = require('./routes/index')
const path = require('path')
const fileUpload = require('express-fileupload')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler)
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/dist')))
  app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'client','dist', 'index.html' ))
  })
}

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
  }
  catch (e) {
    console.log(e)
  }
}
start()