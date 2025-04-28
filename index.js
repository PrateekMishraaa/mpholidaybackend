import express from "express"
import dontenv from "dotenv"
dontenv.config()
const PORT = process.env.PORT || 5000
import mongoose from "mongoose"
const app  = express();
import sendmail from "./email.js"
import cors from "cors"


app.use(cors({
    origin: [
      "http://localhost:4000",
      "http://localhost:5173",
   
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));
app.use(express.json());
app.use("/api",sendmail)
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected to Database"))
.catch(()=>console.log("Disconnect from database"))
app.get("/",(req,res)=>{
    console.log("hello pandit ji")
    res.send("hello from server")
});

app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`))
// ORealeMl9xqtkstg