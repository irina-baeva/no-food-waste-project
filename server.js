const express = require('express')
const connectDB = require('./config/db')
const {
    check,
    validationResult
} = require('express-validator')
const PORT = process.env.PORT || 5050;

const app = express();

//Connect DB
connectDB();

//init middleware, before it was with BodyParser, now we can do with express
app.use(express.json({
    extended: false
}))
app.get('/', (req, res) => res.send('API is runnig'))

//define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/profile', require('./routes/api/profile'))

app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
})