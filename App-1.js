import React from "react"
import ReactDOM from "react-dom"

const heading = React.createElement("h1",
                {id: "heading",abc: "someValue"},
                "Hello world from React app !!!");
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am a h1 tag</h1>
 *          <h2>I am a h2 tag</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div",{id: "parent"}, 
                React.createElement("div",{id: "child"}, 
                [React.createElement("h1",{},"I am a h1 tag"), React.createElement("h2",{},"I am a h2 tag")]));

root.render(parent);