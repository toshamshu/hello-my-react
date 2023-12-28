import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {"id": "heading"}, "Namaste React");

// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>
// const jsxHadingInMultiLine = ( <h1 id="heading"> this is multi line 
//        jsx element </h1> );

const title =  ( 
    <h1 id="titleId">Title element from functional composition</h1>
);
const spanElem = <span>Test span text</span>
const HeadingComponent = () => (
    <div id="container">
        {title}
        {spanElem}
        <h1 id="heading"> Namaste React functional component </h1>
    </div>
);
//Another way below
// const HeadingComponent = () => (
//     <div id="container">
//         {title}
//         <h1 id="heading"> Namaste React functional component </h1>
//     </div>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHadingInMultiLine);
root.render(<HeadingComponent />);