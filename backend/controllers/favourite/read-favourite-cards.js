const db = require("../../utils/db");

const readFavouriteCards = async (req, res) => {
  try {
    const { u_id } = req.authData;
    const cards = await db("favourite")
      .select("cards.*")
      .innerJoin("cards", "cards.c_id", "favourite.c_id")
      .where("favourite.u_id", "=", u_id);
    res.send(cards);
  } catch (error) {
    if (error.sqlMessage?.includes("Duplicate"))
      res.status(400).send("Already added to favourites");
    else res.status(400).send("Something wrong happend,please try again");
  }
};

module.exports = readFavouriteCards;
