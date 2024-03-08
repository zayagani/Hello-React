// import React from "react";
// import Form from "./Component/form";
//Createing HTML ELEMENT
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, "sam", [
        React.createElement("h1", {
            id: "headings"
        }, "hello iam heading"),
        React.createElement("h2", {
            id: "headings"
        }, "hello iam heading h2")
    ]),
    React.createElement("div", {
        id: "child2"
    }, "sam", [
        React.createElement("h1", {
            id: "headings"
        }, "hello iam heading"),
        React.createElement("h2", {
            id: "headings"
        }, "hello iam heading h2")
    ]),
    React.createElement("span", {
        id: "fewspan",
        class: "fewspanClass",
        "data-id": "dataId"
    }, "hello span"),
    React.createElement("button", {
        id: "btn"
    }, "Submit"),
    React.createElement("p", {
        id: "paragraph"
    }, "create paragraph data")
]);
const heading = React.createElement("h1", {
    id: "heading",
    className: "headsup"
}, "hello react element");
console.log(parent, "ppp"); // heading is Object not h1 tag
// finding root where React element inject
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering that React element inside the root
root.render(parent); // render method is converting heading object into h1 tag
 //export default App;

//# sourceMappingURL=index.6bd02f5a.js.map
