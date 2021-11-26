const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/restful_api_db");
require("./server/config/database");

require("./server/routes/taskRoutes")(app);

app.listen(8080, function(){
    console.log("Listening on port: 8080");
})