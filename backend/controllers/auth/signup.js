const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../../utils/db");
const {
  CheckPassword,
  CheckEmail,
  CheckName,
} = require("../../utils/checkValidity");

const signup = async ({ body: { f_name, l_name, email, password } }, res) => {
  const hash = bcrypt.hashSync(password, saltRounds);
  if (
    !(
      CheckPassword(password) &&
      CheckEmail(email) &&
      CheckName(f_name) &&
      CheckName(l_name)
    )
  )
    return res.status(400).send("Please enter valid email and password");
  try {
    db.transaction((trx) => {
      trx("users")
        .insert({
          f_name,
          l_name,
          email,
        })
        .then(([u_id]) => trx("signin").insert({ u_id, password: hash }))
        .then(trx.commit)
        .then(() => res.send("Registered successfully"))
        .catch((error) => {
          // console.log(error.sqlMessage.includes("email"));
          trx.rollback();
          res.status(400).send("Entered email is already registered");
        });
    });
  } catch (error) {
    res.status(400).send("Something wrong happened, please try again");
  }
};

module.exports = signup;
