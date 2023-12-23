const mongoose = require('mongoose');
const config = require('../config');

console.log('config', config);
console.log('DB_URL', config.DB_URL);
module.exports = async() => {
    const DB_URL = config.DB_URL

    try {
        console.log('DB_URL', DB_URL);
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Db Connected with ur: ', DB_URL);
        
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
 
};

 
