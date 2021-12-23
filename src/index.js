import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import { robots } from "./robots";
import CardList from "./CardList";

ReactDOM.render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>,
  document.getElementById("root")
);
