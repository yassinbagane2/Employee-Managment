const express = require("express");
const path = require("path");
const cors = require("cors");
const db = require("./database");
const { errorHandler } = require("./middlewares/errorHandlerMiddleware");

require("dotenv").config();

const app = express();

const corsConfig = {
  origin: true,
  credentials: true,
};

// connecting to database

app.use(cors(corsConfig));
// app.options('*', cors(corsConfig));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", require("./routes/authRoutes"));

app.use(errorHandler);

app.listen(8080, () => {
  db.connect();
});
