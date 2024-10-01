const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const conectDB = require('./config/db');
const router = require('./routes/itemsRoutes');


dotenv.config();

const app = express();
conectDB();

app.use(cors());
app.use(express.json());

app.use('/api/items', router);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running is Port?:${PORT}`)
})