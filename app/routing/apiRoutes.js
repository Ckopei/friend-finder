var friends = require("../data/friends")

module.exports = function(app) {
    app.get("/api/friends", function(req,res){
        //display on page 
        res.json(friends)
    })

    app.post("/api/friends", function(req,res){
        //post from form
        //this will be where i do my logic. comparing scores with friends already in
        //two loops to compare each user to currently held user data.
        //for loop to check every array for its number, push that into its own new array. those are in order of friends#.
    })
}
