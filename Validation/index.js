const express = require("express");
const app = express();
const zod = require("zod")

const schema = zod.array(zod.number())

app.use(express.json())

// app.post("/healthCheckUp",function(req,res){
//     const kidneys = req.body.kidneys;
//     const response =schema.safeParse(kidneys)
//    res.send({
//     response
//    })
//     const noofkidneys = kidneys.length;

//     res.send({
//         response
//     })
// })

function validation(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),
    })

    const response = schema.safeParse(obj);
    console.log(response)
}

validation({
    email:"adarsg@gmail.com",
    password: "adgfjfornjfkn"
})

// app.listen(3000)