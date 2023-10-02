const mongoose = require('mongoose')

const connectMongo = async () => {
  try {
    await mongoose.connect("mongodb+srv://softcodify:lRoLmlYvJKnbnYUE@cluster0.ksq3lqt.mongodb.net/testDB")
    console.log('DB is connect')
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectMongo