require('dotenv/config');

module.exports = function () {
  const birthDate = process.env.birthDate.split('/').reverse();
  const past = new Date(...birthDate);
  const now = new Date();

  // on Date() object, months are 0-indexed
  const pastMonth = past.getMonth() - 1;

  const isBirthday = (past.getDate() === now.getDate() && pastMonth === now.getMonth());
  
  return isBirthday ? "; Hey, today is my birthday 🥳!" : ""
};
