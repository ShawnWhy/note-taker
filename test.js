const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const app = express();

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync= util.promisify(fs.appendFile);
var notes;
var preNote;

var acquireNotes=()=>{
fs.readFile("journal.json","utf8", function(err,data){
    if(err) throw err;
    note = JSON.parse(data);
    console.log(note);
    

})
    
  
}
acquireNotes();





