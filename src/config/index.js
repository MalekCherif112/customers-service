
const path = require('path');
const dotEnv = require('dotenv');

const envPath = process.env.NODE_ENV !== 'prod' &&
  path.resolve(__dirname, '../../.env')

  
dotEnv.config({path: envPath})

module.exports = {

    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
    APP_SECRET: process.env.APP_SECRET,
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
    EXCHANGE_NAME:  "ONLINE_SHOPPING",
    CUSTOMER_BINDING_KEY: "CUSTOMER_SERVICE",
    QUEUE_NAME:'CUSTOMER_QUEUE'

}




 