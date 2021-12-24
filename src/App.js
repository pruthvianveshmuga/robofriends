import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchStr: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
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
