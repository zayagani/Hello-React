<<<<<<< HEAD
//import { Form } from ".";
=======
import { Form } from ".";
>>>>>>> 95d85b656725bf974976ef70a415b7a8d68cb1f0

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, "sam", [
    React.createElement("h1", { id: "headings" }, "hello iam heading"),
    React.createElement("h2", { id: "headings" }, "hello iam heading h2"),
  ]),

  React.createElement("div", { id: "child2" }, "sam", [
    React.createElement("h1", { id: "headings" }, "hello iam heading"),
    React.createElement("h2", { id: "headings" }, "hello iam heading h2"),
  ]),

  React.createElement("span", { id: "fewspan" }, "hello span"),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "headsup" },
//   "hello react element"
// );

console.log(parent, "ppp"); // heading is Object not h1 tag
const root = ReactDOM.createRoot(document.getElementById("root"));
<<<<<<< HEAD
root.render(parent); // render method is converting heading object into h1 tag

//export default App;
=======
root.render(Form); // render method is converting heading object into h1 tag

export default App;
>>>>>>> 95d85b656725bf974976ef70a415b7a8d68cb1f0
