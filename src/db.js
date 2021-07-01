const mongoose = require("mongoose");


const URI = "mongodb+srv://juanchis:juanchis@tasks-app.uwnyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});


const db = mongoose.connection;
db.once("open",_ =>
{
    console.log("Database is connnected to "+ URI );
});
db.once("error",err =>
{
    console.error("\x1b[31m",err,"\x1b[31m");
})

module.exports = mongoose;
