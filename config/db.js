const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const conectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongodb Connected");
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1);
    }
};

module.exports = conectDB;
