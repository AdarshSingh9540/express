const express = require("express");
const { format } = require("path");
const app = express();

app.use(express.json())
// function calculateSum(n){
//     let sum =0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }

const users = [{
    name:"Adarsh",
    
        kidneys:[{
            healthy:true
      
    }]
}]


// app.get('/',function(req,res){
//     const n = req.query.n;
//     const sum = calculateSum(n);
//     res.send(sum.toString()) 
// })

app.get("/",function(req,res){
    const Adarshkidneys = users[0].kidneys;
    const noofkidneys = Adarshkidneys.length;
    let noofhealthykidneys = 0;
    for(let i=0; i<noofkidneys;i++){
        if(Adarshkidneys[i].healthy){
            noofhealthykidneys = noofhealthykidneys+1;
        }
    }

    let noofunhealthykidneys = noofkidneys - noofhealthykidneys;
    res.json({
        noofkidneys,
        noofhealthykidneys,
        noofunhealthykidneys
    })
})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"update it..!"
    })
})

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function (req, res) {
    let newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            });
        }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
});





app.listen(3000)