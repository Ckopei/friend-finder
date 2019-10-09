var friends = require("../data/friends")


module.exports = function(app) {
    app.get("/api/friends", function(req,res){
        //display on page 
        res.json(friends)
    })

    app.post("/api/friends", function(req,res){
        friends.push(req.body)
        //HOW DO I GET MY SCORES RESPONSE TO BE NOT A STRING.
        console.log(req.body)
        res.json(friends)
        //post from form
        //this will be where i do my logic. comparing scores with friends already in
        //two loops to compare each user to currently held user data.
        //for loop to check every array for its number, push that into its own new array. those are in order of friends#.
    })
}

//capture incoming req.body
//add function for a+b
//empty Array
//first friend[i] - parseInt new[i] 
//push difference into array every time
//add all into one
//friends.totaldiff = added all itno one

//new array
//new loop, pull out all totaldiffs into new blank array
//run sort with index and val