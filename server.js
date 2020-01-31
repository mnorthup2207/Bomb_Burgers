const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

//serve static content for the app from the public directory in the application directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require the handlebars package
const exphbs = require("express-handlebars");

// makes the package utilizable and able to pass data through it
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// makes the controllers functions possible through routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });