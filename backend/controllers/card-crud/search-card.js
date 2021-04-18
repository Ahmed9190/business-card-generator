const db = require("../../utils/db");

const searchCard = async (req, res) => {
  const users_full_name = await db.raw(
    `SELECT * from cards
    WHERE CONCAT(cards.f_name,' ',cards.l_name) LIKE '%${req.body.search}%'`
  );
  const results = users_full_name[0];
  //.filter((x) => x);
  res.send(results);
};

module.exports = searchCard;
