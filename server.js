const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");




mongoose.connect("mongodb+srv://sgreilick:8Hb6AdXwPT&B@cluster0.ngdb0.mongodb.net/fitness-tracker?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});
const PORT = process.env.PORT || 3000;


const { setFlagsFromString } = require("v8");

const app = express();



app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});