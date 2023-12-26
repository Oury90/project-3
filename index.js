// imported the module
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


// middW
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// render the index page
app.get("/", (req, res) => {
    res.render("photos.ejs");
})
app.get("/videos", (req, res) =>{
    res.render("videos.ejs");
})


// listening on port 3000
app.listen(port, () =>{
    console.log(`This server is running on port ${port}`);
})