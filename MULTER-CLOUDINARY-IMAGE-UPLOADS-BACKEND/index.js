require("dotenv").config();
const express = require("express");
const fs = require("fs");
const { fileRouter } = require("./src/router/fileRouter.js");
const path = require("path");
const cors = require("cors");

const app = express();

// const __filename = __filename || path.basename(__filename);
// const __dirname = __dirname || path.dirname(__filename);

const uploadDir = path.join(__dirname, "uploads");

if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

app.use(cors());
app.use('/src/uploads', express.static('src/uploads'));

app.use("/files", fileRouter);

app.use('/', (req,res) => {
    res.send("Welcome to file/image upload");
})


const PORT = process.env.PORT || 4040;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});