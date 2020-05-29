import * as React from "react";
import * as ReactDOM from "react-dom";
import './App.scss'
import App from "./App";

ReactDOM.render(
    <App compiler="Typescript" framework="React" bundler="Webpack" />,
    document.getElementById("root")
);
