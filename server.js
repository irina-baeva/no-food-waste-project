const express = require('express');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5050;

const app = express();

//Connect DB
connectDB();

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(bodyParser.json())
app.get('/', (req, res) => res.send('API is runnig'))

app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
})