const db = require("../../utils/db");

const deleteCard = async (req, res) => {
  try {
    const { u_id } = req.authData;
    const card = db("cards").where({ u_id });
    if ((await card).length) {
      await card.del();
      await db("favourite").where({ u_id }).del();
      res.send("Deleted successfully");
    } else res.status(400).send("You do not have a card to delete it");
  } catch (error) {
    res.status(400).send("Something wrong happend,please try again");
  }
};

module.exports = deleteCard;
