const db = require("../../utils/db");

const readCards = async (req, res) => {
  try {
    res.send(await db("cards"));
  } catch (error) {
    res.status(400).send(error);
    // res.status(400).send("Something wrong happend,please try again");
  }
};

module.exports = readCards;
