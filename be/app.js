const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
const router = require("./src/router/index");
const sequelize = require("./src/config/db");
const dotenv = require("dotenv");
const defineAssociations = require("./src/models/defineAssociation");
dotenv.config();

defineAssociations();
var app = express();

// res time
app.use(logger("dev"));
// middleware parse JSON body
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));
//  parse cookies
app.use(cookieParser());
// serve static files from /public folder
app.use(express.static(path.join(__dirname, "public")));
// enable CORS
app.use(cors());
// use router
app.use("/api", router);

const port = process.env.PORT || 3000;

async function syncDatabase() {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synchronized");
  } catch (err) {
    console.error("Error synchronizing database:", err);
  }
}
// call it start synchronized database
syncDatabase();

// catch error 404 and forward to err handle

app.use(function (req, res, next) {
  next(createError(404));
});

// error handle
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // return err
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
module.exports = app;
