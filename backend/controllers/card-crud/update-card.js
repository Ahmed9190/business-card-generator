const db = require("../../utils/db");

const updateCard = async (req, res) => {
  try {
    const { u_id } = req.authData;
    const card = db("cards").where({ u_id });
    if ((await card).length) card.update(req.body);
    await card;
    res.send("Successfully updated");
  } catch (error) {
    // console.log(error);
    res.status(400).send("Something wrong happend,please try again");
  }
};

module.exports = updateCard;
