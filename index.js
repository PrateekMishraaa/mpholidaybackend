import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import sendmail from "./email.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup
app.use(cors({
  origin: [
    "https://superlative-zuccutto-f2f98a.netlify.app", // Frontend URL
    "https://mpholidaybackend.onrender.com",           // Backend URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());
app.use("/api", sendmail);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to Database"))
  .catch(() => console.log("Disconnected from database"));

app.get("/", (req, res) => {
  console.log("hello pandit ji");
  res.send("hello from server");
});

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));

// ORealeMl9xqtkstg