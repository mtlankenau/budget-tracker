const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/budget";
console.log('-------------------------------------------------');
console.log(`process.env.MONGODB_URI: ${process.env.MONGODB_URI}`);
console.log('-------------------------------------------------');
console.log(`process.env: ${process.env}`);
console.log(process.env);
console.log('-------------------------------------------------');
console.log(`process.env.PORT: ${process.env.PORT}`);

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});