const mongoose = require('mongoose');
const mongouri = "mongodb://0.0.0.0:27017/mynotebook";

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
