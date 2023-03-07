const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotnet = require('dotenv');
const helmet = require('helmet');

//
const categoryRoute = require("./routes/category");
const postRoute = require("./routes/post");

dotnet.config();

//db connect
// mongoose.connect(process.env.MONGODB,()=>{
//     console.log("Connected DB")
// });
mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASS}@cluster0.4dd7l5h.mongodb.net/${process.env.DATANAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Database connected successfully!');
})
.catch((err) => {
  console.log('Error connecting with error code:', err);
});

//use middleware
app.use(bodyParser.json({limit: "50mb"}));
app.use(helmet());
app.use(cors());
app.use(morgan('common'));

app.use('/v1/category',categoryRoute);
app.use('/v1/post',postRoute);

app.listen( process.env.POST, ()=> {
    
    console.log('server is running ...');
})