const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db');
const cors = require('cors');
const middleware = require('./middleware/middleware');
const cloudinary = require('cloudinary');
const bodyParser = require('body-parser');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false,
  }));
  app.use(express.json({ extended: false, limit: '50mb' }))
  app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))  

app.use(cors());
app.use(express.json());
db();

app.use('/',require('./routes/auth'));
app.use('/',require('./routes/qa'));
app.use('/',require('./routes/project'));
app.use('/api',middleware,require('./routes/user'));
app.use('/',require('./routes/workshop'));
app.use('/', require('./routes/coding'));
app.use('/', require('./routes/contest'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is Starting");
});