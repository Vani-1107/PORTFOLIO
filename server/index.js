const express =  require("express");
const app = express();
const cors =  require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const {dbconnect} = require('./config/database');
dbconnect();

app.use(express.json());

app.use("/api/v1",require("./routes/Form"));

app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );


// const corsOptions = {
//     orgin:'*',
//     credentials:true,
//     optionSuccessStatus:200,
// }
// app.use(cors(corsOptions));

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     next();
//   });

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"server is running",
    });
});

app.listen(PORT,()=>{
    console.log(`App is running at port ${PORT}`);
});