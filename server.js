// require important modules
const express = require('express')
const bodyParser=require("body-parser")
// import router
const roleRouter = require("./routes/roleRoutes")
const userRouter = require("./routes/userRoutes")
const orderRouter = require("./routes/orderRoutes")
const bookRouter = require("./routes/bookRoutes")
const categoryRouter = require("./routes/categoryRoutes")
// create our Appconst 
port = process.env.PORT || 5000
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))






// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// require the connection (DB)
const db = require('./DB/database')

app.use('/api/v1', roleRouter)
app.use('/api/v1', userRouter) 
app.use('/api/v1', orderRouter)
app.use('/api/v1', bookRouter)
app.use('/api/v1', categoryRouter)


// Testing the connection
db.authenticate()




// START THE SERVER
app.listen(port, () => console.log(`server running on port ${port}`))