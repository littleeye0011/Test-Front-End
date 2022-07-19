import data from "./data/exam-data.json";

let arrData = [];
let result = [];

function loadData() {
  data.forEach((data) => {
    if (data.is_editable_price === false) {
      arrData.push(data.products);
    }
  });
  arrData.forEach((data) => data.map((product) => result.push(product)));
}

loadData();
const Function1 = () => {
  return (
    <div>
      <h1>Function1</h1>
      <img
        src="https://www.img.in.th/images/15fa943b430f7f815a252557a2b7bbbb.jpg"
        alt=""
      />
      <h2>Result</h2>
      {result.map((products, id) => {
        return (
          <p key={id}>
            [name : '{products.name}' , totalSubProductWeight :
            {products.amount * products.weight}]
          </p>
        );
      })}
    </div>
  );
};

export default Function1;
