const convertDateToString = date => {
  const dateArr = [];

  date.forEach((item, index) => {
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(item);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(item);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(item);
    dateArr.push(`${da} ${mo} ${ye}`);
  });

  return `${dateArr[0]} - ${dateArr[1]}`;
};

export default convertDateToString;
