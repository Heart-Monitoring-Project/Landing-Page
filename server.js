const express = require("express")
let port_number = process.env.PORT || 8080;
const app = express()

app.use(express.static("public"))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(port_number,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Server is running")
})