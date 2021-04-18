const CheckPassword = (password) => {
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return passwordPattern.test(password);
};

const CheckEmail = (email) => email.includes("@");

const CheckName = (name) => name.length >= 2;
module.exports = { CheckPassword, CheckEmail, CheckName };
