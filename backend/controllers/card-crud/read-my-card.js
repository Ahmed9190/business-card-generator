const db = require("../../utils/db");

const readMyCards = async (req, res) => {
  try {
    const [card] = await db("cards").where({ u_id: req.authData.u_id });
    res.send(card);
  } catch (error) {
    res.status(400).send("Something wrong happend,please try again");
  }
};

module.exports = readMyCards;
