const express = require("express");

function calculateSum(n){
    let sum =0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

const app = express();

app.get('/',function(req,res){
    const n = req.query.n;
    const sum = calculateSum(n);
    res.send(sum.toString()) 
})

app.listen(4000)