var path = require('path');

module.exports = function(app) {
    app.get("/", function(req,res){
        //home page
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
    app.get("/survey", function(req,res){
        //get survey page
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
    app.get("*", function(req,res){
        //catch all. home page if no others are hit
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
}