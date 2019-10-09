//front end needs a form. just like tables classwork
var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//use public as our static folder.
app.use(express.static("public"))

require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)



app.listen(PORT, function(){
    console.log("Port at: "+PORT)
})