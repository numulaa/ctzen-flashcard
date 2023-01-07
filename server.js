const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mainRoutes = require("./routes/main");

const flashCardRoutes = require("./routes/flashcard");
const cardsDecks = require("./routes/cardDeck");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    proxy: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//cookie setup
app.use(cookieParser("keyboard cat"));
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/cardDeck", cardsDecks);
app.use("/flashcard", flashCardRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
