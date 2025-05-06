require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes')


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', userRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});