const convertUnixTimeToDate = (unixTime) => {
  let expire = new Date(unixTime);
  let date = expire.getDate();
  if (date < 10) {
    date = "0" + date;
  }
  let month = expire.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let year = expire.getFullYear();
  return `${date}/${month}/${year}`;
};

export default convertUnixTimeToDate;
