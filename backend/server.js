const express = require('express');
const mongoose = require('mongoose');

// create an express app
const app = express();

// MongoDB connection string
const dbURI = 'mongodb+srv://alensonyjoseph:VmAfxKhgGrwFzbS5@aichemist.perwkdx.mongodb.net/?retryWrites=true&w=majority';

// connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        // listen for requests
        app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
    })
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello from the backend server!');
});
