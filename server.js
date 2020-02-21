const express = require('express');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5050;

const app = express();

//Connect DB
connectDB();

//define routes 
app.use('/api/auth', require('./routes/api/auth'))


app.get('/', (req, res) => res.send('API is runnig'))

app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
})