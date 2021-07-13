const express = require("express");
const app = express();
const cors = require("cors");
const compression = require("compression");

const signup = require("./controllers/auth/signup");
const signin = require("./controllers/auth/signin");
const { verifyToken, verifyHeaders } = require("./utils/jwt");
const createCard = require("./controllers/card-crud/create-card");
const readCards = require("./controllers/card-crud/read-cards");
const updateCard = require("./controllers/card-crud/update-card");
const deleteCard = require("./controllers/card-crud/delete-card");
const addToFavourite = require("./controllers/favourite/add-to-favourite");
const readFavouriteCards = require("./controllers/favourite/read-favourite-cards");
const deleteFavouriteCard = require("./controllers/favourite/delete-favourite-card");
const searchCard = require("./controllers/card-crud/search-card");
const readMyCards = require("./controllers/card-crud/read-my-card");
// const bcrypt = require("bcrypt");

// const saltRounds = 10;
// const password = "Ahmed123#";
// const hash = bcrypt.hashSync(password, saltRounds);
// console.log(hash);

//middlewares
app.use(compression());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static("build"));

//routes
//---------------------auth-----------------------
app.post("/signup", signup);
app.post("/signin", signin);
//------------------Card CRUD-------------------
//create
app.post("/create-card", verifyHeaders, verifyToken, createCard);
//read
app.get("/read-cards", readCards);
app.post("/read-my-card", verifyHeaders, verifyToken, readMyCards);
app.post("/search-card", searchCard);
//update
app.put("/update-card", verifyHeaders, verifyToken, updateCard);
//delete
app.delete("/delete-card", verifyHeaders, verifyToken, deleteCard);
//------------------Favourite-------------------
//add to favourite (create)
app.post("/add-to-favourite", verifyHeaders, verifyToken, addToFavourite);
//read favourite cards (read)
app.get(
  "/read-favourite-cards",
  verifyHeaders,
  verifyToken,
  readFavouriteCards
);
//delete favourite card (delete)
app.delete(
  "/delete-favourite-card",
  verifyHeaders,
  verifyToken,
  deleteFavouriteCard
);

app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`connected on port ${port}`));
