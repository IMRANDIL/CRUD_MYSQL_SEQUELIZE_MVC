const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const productRouter = require('./routes/ProductRoute');

//middleware...


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', productRouter);








const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})