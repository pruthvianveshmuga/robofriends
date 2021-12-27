import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

const useRobots = () => {
  const [robots, setRobots] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);
  return robots;
};

const App = () => {
  const robots = useRobots();
  const [searchStr, setSearchStr] = useState("");

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchStr.toLowerCase());
  });
  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox onSearch={(str) => setSearchStr(str)} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default App;
