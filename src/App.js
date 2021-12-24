import React, { Component } from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchStr: "",
    };
  }
  onSearch = (str) => {
    this.setState({ searchStr: str });
  };
  render() {
    const { robots, searchStr } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchStr.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearch={this.onSearch} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
