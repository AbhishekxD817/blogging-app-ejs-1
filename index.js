import express from "express"
import * as path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { v4 as uuidv4 } from 'uuid';


const PORT = 9876;
const app = express();

// set views 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

// public folder use
app.use(express.static(path.join(__dirname,"public")));

// To read request body
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(PORT,()=>{
    console.log(`Server Started ==> http://localhost:${PORT}`);
})




app.get("/",(req,res)=>{
    res.render("Home")
})








