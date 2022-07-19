const test = [
  [],
  [1],
  [1, 2, 3],
  [1, 1],
  [1, 2, 3, 4, 5, 6],
  [1, 5, 3, 2, 5, 10],
  [100, 5, 3, 2, 99],
  [35, 5, 3, 2, 5, 100],
  [1, 5, 101, 2, 5, 10],
  [10, 10, 9],
];

let newArr = [];

test.forEach((n) => {
  const result1 = n.sort((a, b) => a - b);
  let result2 = new Set(result1);
  newArr.push(Array.from(result2));
});

let testResult = [];
let popResult = [];

newArr.forEach((n2) => {
  testResult.push(n2);
  if (n2.length < 1) {
    return (n2[0] = null);
  } else if (n2.length === 1) {
    return n2[0];
  } else {
    n2.pop();
    return n2;
  }
});

testResult.forEach((n3) => {
  popResult.push(n3.pop());
});

const Function3 = () => {
  return (
    <div>
      <h1>Function3</h1>
      <img
        src="https://www.img.in.th/images/3c4afda8132d4388647df34089edf8fd.jpg"
        alt=""
      />
      <h2>Result</h2>
      <div className="result">
        {test.map((data, i) => {
          console.log([data], "=", popResult[i]);
          return (
            <h4 key={i}>
              {[data].toString()} = {popResult[i]}
            </h4>
          );
        })}
      </div>
    </div>
  );
};

export default Function3;
