const express = require("express");
const cors = require("cors");
const mailingRoutes = require("./routes/mailing");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/API/mail", mailingRoutes);

module.exports = app;
