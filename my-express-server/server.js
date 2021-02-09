const express = require('express');
const app = express();
app.get("/", function(request, response){//"/"this specifies the route we're going to be targeting app.get method and call back function, we tap into the request and we log it into our console and then we send back a reponse
  response.send("<h1>hello world!</h1>")

})//this specifies what should happen when a browser gets intouch with our browser,/ is the home root and there is a call back function
app.get("/contact", function(request, response){
  response.send("Contact me at: ojukwu.kene@yahoo.com")
})
app.get("/about", function(request, response){
  response.send("I want to make it in life")
})
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
