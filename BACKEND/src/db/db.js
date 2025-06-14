const mongoose = require("mongoose");

const dbConnected = (URI) => {
  return mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("successfully connected to database");
    })
    .catch((err) => {
      console.log("Error to connecting database", err);
    });
};
module.exports = { dbConnected };
