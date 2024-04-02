// react element is a object get convert into  html while updatign to dom


const parent = React.createElement(
    "div",
    { id: 'parent' },
    [
        React.createElement(
            "div",
            { id: 'child' },[
            React.createElement(
              "h1",
              {},
              "I am a h1 tag"
            ),
            React.createElement(
              "h1",
              {},
              "I am a h1 tag"
            ) ,
            ]),
            React.createElement(
                "div",
                { id: 'child2' },[
                React.createElement(
                  "h1",
                  {},
                  "I am a h1 tag"
                ),
                React.createElement(
                  "h1",
                  {},
                  "I am a h1 tag"
                ) ,
                ])
    ]
  );
const heading = React.createElement("h1", { style: { color: "red",
 fontSize: "24px" } },
  "Namaste Lucky");

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)