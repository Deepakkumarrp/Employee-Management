const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { Employeerouter } = require("./routes/employee.routes");
// const { bookRouter } = require("./routes/book.routes");
// const { orderRouter } = require("./routes/order.routes");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/", userRouter);
app.use("/employee", Employeerouter);

app.get("/",(req,res) => {
    res.json({ mssg : "Welcome to the home page"})
})

app.use("*", (req,res) => {
    res.status(404).json({ mssg: "Page Not Found."})
})

app.listen(PORT, async(req,res) => {
    try{
        await connection;
        console.log("db connected successfully.")
        console.log(`Server is running at port ${PORT}.`);
    }catch(e){
        console.log(e);
    }
})