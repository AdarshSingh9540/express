const express = require("express");
const app = express();

// let noofrequest =0;

// function calculate(res,res,next){
//     noofrequest= noofrequest+1;
//     console.log(noofrequest);
//     next();
// }
// function userMiddleWare(res,req,next){
//         const username= "Adarsh";
//     const password = "pass";
//     if(username !="Adarsh" && password !="pass"){
//         res.status(400).json({
//             "msg":"Incorrect user details"
//         })
//     }else{
//         next();
//     }

// }

// function kidneysMiddleWare(req, res, next) {
//     const kidneys = req.query.kidneys;
//     if (kidneys !== "1" && kidneys !== "2") {
//         res.status(400).json({
//             "msg": "Incorrect input"
//         });
//     } else {
//         next();
//     }
// }

// app.get("/healthCheckUp",function(req,res){
//     const username= "Adarsh";
//     const password = "pass";
//     const kidneys = req.query.kidneys;
//     if(username != "Adarsh" || password !="pass"){
//        res.status(400).json({"msg":"Something went wrong"})
//     }
//     if(kidneys!= 1 && kidneys !=2){
//         res.status(400).json({"msg":"Something went wrong"})
//        }

//        res.json({"msg":"your kidneys are fine ..!"})
// })
// app.use(calculate);
app.use(express.json())
 
app.post("/healthCheckUp",function(req,res){
    const kidneys = req.body.kidneys;
    // if(!kidneys){
    //     res.status(400).json({"Msg":"Please enter valid input"})
    // }
    const noofkidneys = kidneys.length;

    res.send("You have "+noofkidneys+" kidneys");
})

// app.get("/healthCheckUp" , userMiddleWare,kidneysMiddleWare,function(req,res){
//     res.send("Your Kidneys is Good..!")
// })
app.use(function(err, req, res, next) {
    res.status(500).json({
        msg: "Our server is facing some issues. Please try again later."
    });
});



app.listen(3000);