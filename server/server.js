const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body Parser middleware
app.use(
    bodyParser.urlencoded({
        extended:false
    })
);
app.use(bodyParser.json());

// DB Confi
const db = require('./config/keys').mongoURI;

// Connect to MongoDb....
mongoose
    .connect(
        db,
        { useNewUrlParser: true },
        { useUnifiedTopolgy: true }

    )
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));