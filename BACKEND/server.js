const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnected } = require("./src/db/db");
const cookieParser = require("cookie-parser");
const URI = process.env.MONGODB_URI;
const app = express();



//importing routes
const authRouter=require("./src/routes/auth.routes")
const profileRouter=require("./src/routes/profile.routes")
const uploadRouter=require("./src/routes/upload.routes")
const userRouter=require("./src/routes/user.routes")
const postRouter=require("./src/routes/post.routes")
const commentRouter=require('./src/routes/comment.routes')

//db connection
dbConnected(URI);



//middleware
  app.use("*",cors({origin:["http://localhost:5173","https://iitmitra.com"],credentials:true}));
app.use(express.json());
app.use(cookieParser());





// routes
app.use('/api/auth',authRouter)
app.use('/api/profile',profileRouter)
app.use('/api/upload',uploadRouter)
app.use('/api/user',userRouter)
app.use('/api/post',postRouter)
app.use('/api/comment/',commentRouter)




app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
  