const express = require("express");
const { format } = require("path");
const app = express();
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


app.listen(3000)