const mongoose = require('mongoose');
require('dotenv').config(); 

const username = encodeURIComponent(process.env.MONGO_USERNAME);
const password = encodeURIComponent(process.env.MONGO_PASSWORD);

const mongouri = `mongodb+srv://${username}:${password}@ethernotes.hyewp0o.mongodb.net/?retryWrites=true&w=majority&appName=EtherNotes`;

const connecttomongo = () => {
    return mongoose.connect(mongouri)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
            throw error; // rethrow the error if needed
        });
};

module.exports = connecttomongo;
