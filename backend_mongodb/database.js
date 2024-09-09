const express = require("express");
const app = express();
const server = require("http").createServer(app);
const mongoose = require("mongoose");
const port = 5000;
const url =
  // "mongodb://mongoadmin:mongoadmin@localhost:27017/Share_Care?authSource=admin";
  "mongodb://localhost:27017/mydatabase"
const router = require("./Router/userRoutes");
const bodyparser = require("body-parser");
const cors = require("cors");


mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("somethin went wrong " + err));
server.listen(port, () => {
  console.log(`Server is runnign on port ${port}`);
});

app.get("/dummy", (req, res) => {
  res.send("hello world");
  console.log("hello world");
});

app.use(bodyparser.json());
app.use(cors());
app.use("/api", router);
const path = require('path');

const donationForm = require('./Router/DonationRoute')
app.use('/api',donationForm)

const category = require('./Router/categoryRouter')
app.use('/api',category)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.urlencoded({ extended: true }));
const AdminUser = require('./Router/AdminUserRoute');
app.use('/api',AdminUser)
