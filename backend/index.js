const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db');
const cors = require('cors');
app.use(cors());
app.use(express.json());
db();

app.use('/',require('./routes/auth'));
app.use('/',require('./routes/qa'));
app.use('/',require('./routes/project'));
app.use('/',require('./routes/user'));
app.use('/',require('./routes/workshop'));
app.use('/',require('./routes/coding'));



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server is Starting");
})