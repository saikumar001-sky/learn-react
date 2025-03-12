/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello H1</h1>
 *          <h2>Hello H1</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>Hello H1</h1>
 *          <h2>Hello H1</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  // parent element
  "div",
  {
    id: "parent",
  },
  [
    // child elements
    React.createElement("div", { id: "child1", key:"dev"}, [
      // nested siblings
      React.createElement("h1", {key:"devh1"}, "Hello H1"),
      React.createElement("h2", {key:"devh2"}, "Hello H2"),
    ]),
    React.createElement("div", { id: "child2" ,key:"dev1"}, [
      React.createElement("h1", {key:"dev1h1"}, "Hello H1"),
      React.createElement("h2", {key:"dev1h2"}, "Hello H2"),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
