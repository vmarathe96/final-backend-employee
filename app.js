const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const router = require('./routes/employee.routes')
const adminRouter = require('./routes/admin.routes')
require('dotenv').config()


const app = express()

var corsOptions = {
    origin:" http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/admin',adminRouter)
app.use('/api',router)

app.get('/', (req,res) => {
    res.json({
        message: "Welcome to the Employee Management system"
    })
})
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})

const db = require("./models")

db.mongoose.connect(db.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log(`Successfully connected to the Database on port ${PORT}`)
})
.catch((error) => {
    console.log(error)
    process.exit()
})