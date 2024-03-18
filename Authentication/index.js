const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "12345";
const USERS = [{
    username:"Adarsh@gmail.com",
    password: "1234",
    name :"Adarsh singh"
},
{
    username:"Singh@gmail.com",
    password:"1234",
    name:"Priya"
},
{
    username:"Rahul@gmail.com",
    password:"1234",
    name:"Rahul"

}

];

function userExits(username,password){
    let userExits = false;

    for(let i=0 ; i<USERS.length ; i++){
        if(USERS[i].username == username && USERS[i].password==password){
            userExits = true;
        }
    }
    return userExits;

}

app.use(express.json());

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    
    if(!userExits(username,password)){
        return res.status(403).json({
            msg:"User doesnot exits in our db"
        })
    }

    var token= jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    }) 
})


app.get("/users",function(req,res){
         const token = req.headers.authorization;
        const decode = jwt.verify(token,jwtPassword);
        const username = decode.username;
    

        res.json({
            users:USERS.filter(function(val){
                if(val.username == username){
                    return false;
                }else{
                return true;
                }
            })
        })

         res.json({
            users:USERS
        })

})

app.listen(3000)