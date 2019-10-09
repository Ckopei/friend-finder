var friends = require("../data/friends")


module.exports = function(app) {
    app.get("/api/friends", function(req,res){
        //display on page 
        res.json(friends)
    })

    app.post("/api/friends", function(req,res){
        
        console.log(req.body)
        
//capture incoming req.body
//add loop for friend index
//add loop for a+b
//new loop, push difference to var
//run a basic sort by checking each aaginast the last lowest
        var newFriend = req.body
        //max score difference you can possibly have is 50. 1-5 answer and 10 questions.
        var maxDifference = 50
        //this is where I store the friend[index] of the current lowest difference
        var matchIndex = 0
        //first for loop just loops through my friends array
        for (var i = 0; i < friends.length; i++){
			var scoresDifference = 0;
            //second for loop is whats used to go through the individual scores in the scores array. this loop will complete before
            //the i loop ever iterates
			for (var x = 0; x < 10 ; x++){
                scoresDifference = scoresDifference + Math.abs(friends[i].scores[x] - parseInt(req.body.scores[x]));
                console.log(scoresDifference)
            }
            console.log(scoresDifference)
            //if the difference calculated above is less than 50, it will replace the maxDifference
			if (scoresDifference < maxDifference) {
                maxDifference = scoresDifference
                //set the matchIndex to the current index of the friend who holds the lowest difference
				matchIndex = i;
            }
            else {
                console.log(friends[i].name+" didnt work out.")
            }
        }

        res.json(friends[matchIndex])
        friends.push(req.body)
    })


}

