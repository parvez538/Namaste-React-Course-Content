
// Using React
const heading1 = React.createElement(
    "h1",
    {
      id: "heading1",
    },
    "hello Parvez"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "heading2",
    },
    "hello Parvez"
  );

  const newHeading = React.createElement("h1", {}, "Parvez Mullani");

  const newContainer = React.createElement(
    "div",
    {
      id: "newContainer",
    },
    newHeading
  );

  const span = React.createElement("span", {}, "Welcome To React Course");

  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading1, heading2, span, newContainer]
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(container);