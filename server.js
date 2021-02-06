const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// define api routes 
// (within this file, if no API routes are hit, the React app is sent)
app.use(routes);

// connect to mongodb
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// start server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});