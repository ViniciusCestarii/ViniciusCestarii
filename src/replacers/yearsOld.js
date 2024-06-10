require('dotenv/config');

module.exports = function () {
  const birthDate = process.env.birthDate.split('/').reverse();
  const past = new Date(...birthDate).getTime();
  const now = new Date().getTime();

  const ms = {
    year: 31536000,
    month: 2628000,
    day: 86400,
  };

  let time_elapsed = Math.floor((now - past) / 1000);
  let years = {
    quotient: Math.floor(time_elapsed / ms.year),
    rest: time_elapsed % ms.year,
  };

  return years.quotient
};
