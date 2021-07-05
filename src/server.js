const express = require("express"),
  app = express(),
  path = require("path"),
  routes = require("./routes/task.routes");

const morgan = require("morgan"),
         {mongoose} = require("./db")


//Setttings
app.set("PORT", process.env.PORT || 5000);

//middlewares

app.use(express.static(path.join(__dirname,"public")));
app.use(morgan("dev"));
app.use(express.json());

//Routes

app.use("/api/tasks",routes);

app.listen(app.get("PORT"), () => {
  console.log("server on port", app.get("PORT"));
});


