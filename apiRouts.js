const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const app = express();
var journal = require("./journal.json");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync= util.promisify(fs.appendFile);
var notes;

const res = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// async function acquireNotes(res){
//     try{
//         const preNote=await readFileAsync("journal.json","utf8")
//         .then(function(){ notes = JSON.parse({preNote})})
//         .then(res.JSON(notes));
//     }
//  catch (err) {
//     console.log(err);
//   }
// }


// module.exports = function(app){
//     var acquireNotes=()=>{
//         fs.readFile("journal.json","utf8", function(err,data){
//             if(err) throw err;
//             notes = JSON.parse(data);
//         })}
// app.get("/api/notes", function(req,res){
//     acquireNotes();
//     res.JSON(notes);

// })}


module.exports = function(app){
    // var journal =[{"title":"tests","body":"asfdfsd","journal":"food"},{"title":"lskfjsdlk","body":"sdjlfkjdsklf","journal":"excercise"},{"title":"ouch","body":"dude","journal":"food"}];

    

    app.get("/api/notes",function(req, res){

    res.json(journal)});


    app.get("/api/notes/:singleNote", function(req, res){
        console.log(req.params.singleNote);
        var selected = req.params.singleNote;
        for(var i=0;i<journal.length;i++){
             if(selected.toLocaleLowerCase() === journal[i].title.toLocaleLowerCase()){
                 return res.json(journal[i])  
             }
        }
        return res.send("not character found");

    }
)
 app.post("/api/notes", function(req,res){
     var newNote = req.body;
     journal.push(newNote);
     res.json(newNote);
     
 })

 app.post("/api/notes/clear",function(req,res){
     journal.length=0;
     res.json({ok:true});

     res.sendFile(path.join(__dirname,"/public/assets/js/index.js"))
    })
app.delete("/api/notes/:note",(req,res)=>{
    console.log("deleting "+ req.params.note);
    var noteDelete=req.params.note;
    journal=journal.filter((item)=>item.title!==noteDelete);
    res.json(journal);
    // save();


 })
}

// app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
// };




// app.post("/api/addcharacter", function(req, res){
//     var newCharacter = req.body;
//     characters.push(newCharacter);
//     console.log(characters)
//     res.json(newCharacter);
  
//   });



//  

// app.get("/api/characters/:dadsd",function(req, res){
//     console.log(req.params.dadsd);
//     var selected = req.params.dadsd
  
//     for(var i= 0; i<characters.length;i++ ){
//       if(selected.toLocaleLowerCase() === characters[i].routName.toLocaleLowerCase()){
//         return res.json(characters[i]);
//       }
//     }
//    return res.send("not character found");
  
//   });

