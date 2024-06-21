import express from "express"

const PORT = 9876;
const app = express();


app.listen(PORT,()=>{
    console.log(`Server Started ==> http://localhost:${PORT}`)
})