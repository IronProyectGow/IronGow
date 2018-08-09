require('dotenv');
const mongoose = require('mongoose');

<<<<<<< HEAD
=======

MONGODB_URI = process.env.MONGO_URI
>>>>>>> 89d80d29afcb2ddd3d3043188429c0efa1461665

MONGODB_URI = process.env.MONGO_URI

mongoose.connect(MONGODB_URI)
   .then(() => {
       console.info(`Connected to the database: ${MONGODB_URI}`)
   })
   .catch(error => {
       console.error('Database connection error:', error);
   });

