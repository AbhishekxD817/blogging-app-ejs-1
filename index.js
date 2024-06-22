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


const posts_data = [
  {
    "post_id": "post1",
    "username": "john_doe",
    "followers": 1532,
    "following": 864,
    "content": "I love exploring new places!",
    "likes": 42,
    "tags": ["travel", "adventure"]
  },
  {
    "post_id": "post2",
    "username": "sara_smith",
    "followers": 2897,
    "following": 420,
    "content": "Enjoying the sunny weather today ☀️",
    "likes": 98,
    "tags": ["nature", "outdoors"]
  },
  {
    "post_id": "post3",
    "username": "alex_jones",
    "followers": 431,
    "following": 312,
    "content": "Just finished a great book! Highly recommend it.",
    "likes": 57,
    "tags": ["books", "reading"]
  },
  {
    "post_id": "post4",
    "username": "emily_wilson",
    "followers": 7214,
    "following": 205,
    "content": "Cooking up some delicious vegan recipes 🌱",
    "likes": 321,
    "tags": ["cooking", "vegan"]
  },
  {
    "post_id": "post5",
    "username": "mark_thompson",
    "followers": 185,
    "following": 53,
    "content": "Excited for the upcoming basketball season!",
    "likes": 15,
    "tags": ["sports", "basketball"]
  }
]


// setup routes

app.get("/",(req,res)=>{
    res.render("Home");
})

app.get("/posts",(req,res)=>{
  res.render("Posts",{posts:posts_data});
})

app.get("/posts/:id",async(req,res)=>{
  let {id} = req.params;
  let post = await posts_data.find((post)=> post.post_id === id)
  res.render("Post",{post})
})








