const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const env = require("dotenv");
env.config();
app.use(cors());
const http = require("http");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const PORT = process.env.PORT||8000

// mongodb connection
main().catch((err) => console.log(err));

async function main() {
  mongoose
    .connect(process.env.MONGO_DB_URL, { useNewUrlParser: true })
    .then(() => {
      console.log("mongo_db connected");
    });
}


app.get("/" ,async(req,res)=>{
    res.send("hell0 node js")
})

app.use("/user" , userRoutes.router)
app.use("/review" , reviewRoutes.router)



const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
  console.log("app is listening in port  " + PORT);
});
