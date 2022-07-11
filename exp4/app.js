const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");


app.get("/", (req, res)=>{
    res.render("home");
})
app.get("/about", (req, res)=>{
    res.render("about");
})


app.get("/contact", (req, res)=>{
    var a = ["indore", "mumbai", "pune", "bhopal", "delhi", "ujjain", "dewas"];
    var pagedata = { city : a }; 
    res.render("contact", pagedata);
})


app.get("/product", (req, res)=>{

    var product = [
        {
            name : "Sony Mobile",
            price : 24500,
            image : "sony.jpg"
        },
        {
            name : "HTC Mobile",
            price : 14000,
            image : "htc.jpeg"
        },
        {
            name : "I-Phone",
            price : 55000,
            image : "iphone.jfif"
        },
        {
            name : "Samsung",
            price : 18000,
            image : "samsung.jpg"
        },
        {
            name : "T-Shirt",
            price : 1250,
            image : "tshirt.jpg"
        },
        {
            name : "Samsung TV",
            price : 58000,
            image : "2.jpg"
        }
    ];


    var pagedata = { pro : product };
    res.render("product", pagedata);
})


const port = 3000;
app.listen(port, ()=>{
    console.log("server running -----------");
})