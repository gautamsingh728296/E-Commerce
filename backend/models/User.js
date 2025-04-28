const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://bookStore:2z1z5YybpTs0XtxJ@cluster0.e8qt4es.mongodb.net/bookstore?retryWrites=true&w=majority', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// //   useCreateIndex: true,
// //   useFindAndModify: false
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;
