const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://bookStore:2z1z5YybpTs0XtxJ@cluster0.e8qt4es.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
mongoose.connect('mongodb+srv://abc:123@cluster0.l1si4fw.mongodb.net/test', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Product Model
const ProductSchema = new mongoose.Schema({
    // id: {
    //   type: Number,
    //   required: true
    // },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      // required: true
    },
    category: {
      type: String,
      required: true
    },
    new_price: {
      type: Number,
      required: true
    },
    old_price: {
      type: Number,
      required: true
    },
    Date: {
      type: Date,
      default: Date.now
    },
    available: {
      type: Boolean,
      default: true
    }
  });
  
  const Product = mongoose.model('Product', ProductSchema);
  
  // Exporting the app and Product model
  module.exports = Product;