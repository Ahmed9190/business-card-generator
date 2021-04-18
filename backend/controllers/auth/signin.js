const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../utils/db");
const { CheckPassword, CheckEmail } = require("../../utils/checkValidity");

const signin = async ({ body: { email, password } }, res) => {
  if (!(CheckPassword(password) && CheckEmail(email)))
    return res.status(400).send("Please enter valid information");
  try {
    const [{ u_id }] = await db("users").select("u_id").where({ email });
    const [{ password: hash }] = await db("signin")
      .select("password")
      .where({ u_id });
    const match = await bcrypt.compare(password, hash);
    if (match)
      jwt.sign({ u_id, email }, "secretkey", (err, token) => {
        res.send(token);
      });
    else res.status(400).send("Email or password is not valid");
  } catch (error) {
    res.status(400).send("Something wrong happend,please try again");
  }
};

module.exports = signin;
