let date = new Date("2020-08-10T14:54:52+07:00").toLocaleDateString("en-GB");

const unixTimeStamp = new Date("2020-08-10T14:54:52+07:00").getTime() / 1000;
const hour = new Date("2020-08-10T14:54:52+07:00").getHours();
const minutes = new Date("2020-08-10T14:54:52+07:00").getMinutes();
const month = new Date("2020-08-10T14:54:52+07:00").getMonth() + 1;

const thaiDateTime = new Date("2020-08-10T14:54:52+07:00").toLocaleDateString(
  "th-TH",
  {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
);
let days = "";
let quarter = "";
const dayInMonth = () => {
  let months = "";
  if (month > 8) {
    months = month + 1;
    if (months % 2 === 0) {
      days = 30;
    } else if (months % 2 === 1) {
      days = 31;
    }
  } else {
    if (month % 2 === 0 && month !== 8 && month !== 2) {
      days = 30;
    } else if (month % 2 === 1 || month === 8) {
      days = 31;
    } else {
      days = "28 or 29";
    }
  }
};

const quarterInYear = () => {
  if (month === 1 || month === 2 || month === 3) {
    quarter = 1;
  } else if (month === 4 || month === 5 || month === 6) {
    quarter = 2;
  } else if (month === 7 || month === 8 || month === 9) {
    quarter = 3;
  } else {
    quarter = 4;
  }
};

quarterInYear();
dayInMonth();

const Function2 = () => {
  return (
    <div>
      <h1>Function2</h1>
      <img
        src="https://www.img.in.th/images/f89cee36fbe7fe413101798f98db4334.jpg"
        alt=""
      />
      <h2>Result</h2>
      <div className="result">
        <h4>
          {date} {hour}:{minutes}
        </h4>
        <h4>{thaiDateTime} -- รูปแบบปฏิทินไทย</h4>
        <h4>{days} -- จำนวนวันในเดือนนี้</h4>
        <h4>{quarter} -- ไตรมาตรของเดือนนี้</h4>
        <h4>{unixTimeStamp} -- unix TimeStamp</h4>
      </div>
    </div>
  );
};

export default Function2;
