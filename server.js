const fs= require("fs");
const express = require("express");
const path= require("path");
// const jounal=require(".journal.json");


const PORT = process.env.PORT || 8088;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());



require("./apiRouts")(app);
require("./htmlRouts")(app);



app.listen(PORT, function () {
    console.log("Server is running on "+ PORT+" port");
  });