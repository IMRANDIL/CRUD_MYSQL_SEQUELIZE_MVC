const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();


//middleware...


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));









const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})