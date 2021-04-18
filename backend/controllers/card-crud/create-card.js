const db = require("../../utils/db");

const createCard = async (req, res) => {
  try {
    const { u_id } = req.authData;
    await db("cards").insert({ u_id, ...req.body });
    res.send("Successfully created");
  } catch (error) {
    res.status(400).send("Something wrong happend,please try again");
  }
};

module.exports = createCard;
