var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

var app = express();
const connect = require("./config/db.js");

const router = express.Router();

const employeeRouter = require("./api/employee/employee.router");

const leaveRouter = require("./api/leave/leave.router");

const emailRouter = require("./api/emp_email/emp_email.router");

require("dotenv").config();

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/employee", employeeRouter);

app.use("/api/leave", leaveRouter);
app.use("/api/emp_email", emailRouter);
app.listen(process.env.APP_PORT, () => {
  console.log(`server running on port ${process.env.APP_PORT}`);
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//app.use("/", indexRouter);
//app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
