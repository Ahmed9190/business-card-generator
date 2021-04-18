const db = require("../../utils/db");

const addToFavourite = async (req, res) => {
  try {
    const { u_id } = req.authData;
    await db("favourite").insert({ u_id, c_id: req.body.c_id });
    res.send("Successfully added");
  } catch (error) {
    if (error.sqlMessage.includes("Duplicate"))
      res.status(400).send("Already added to favourites");
    res.status(400).send("Something wrong happend,please try again");
  }
};

module.exports = addToFavourite;
