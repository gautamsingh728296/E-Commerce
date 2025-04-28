const express = require('express');
const app = express();
const multer = require('multer');
const productRouter = require('./routes/productroute')
const userRoute = require('./routes/userRoute')
const port = 4000;


const path = require('path');
const cors = require('cors');


app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
  console.log("server is running")
  res.send('Hello World!');
});

app.use(productRouter)
app.use(userRoute)




const storage = multer.diskStorage({
  destination:'./uploads/images',
  filename: function (req, file, cb) {
    // Define the filename for uploaded files
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });
app.use("/images", express.static('uploads/images'));



app.post("/upload", upload.single('product'), (req, res) => {
  console.log("hitted")
  
  res.json({
      success: 1,
      img_url: `http://localhost:${port}/images/${req.file.filename}`
  })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
