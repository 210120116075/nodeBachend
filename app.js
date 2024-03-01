const express = require("express");
const mongoose = require("mongoose");
const StudentSchema = require('./Schema/StudentSchema')

const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
const studentRoutes = require('./Routes/StudentRoutes');
app.use('/user',studentRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/cw1", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("error..", err);
})

app.listen(PORT, () => {
    console.log("server started on port",PORT);
});











