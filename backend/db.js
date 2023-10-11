const mongoose = require('mongoose');
const mongoURI= "mongodb+srv://harshit3011:coolboi@cluster0.qhpdoxg.mongodb.net/gofoodmern?retryWrites=true&w=majority"

const mongoDB=async()=>{
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
      let fetched_data=await mongoose.connection.db.collection("food_items");
      let data = await fetched_data.find({}).toArray()
      global.food_items=data;
      const foodCategory = await mongoose.connection.db.collection("foodCategory");
      let catData = await foodCategory.find({}).toArray();
      global.foodCategory=catData;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

module.exports=mongoDB;
