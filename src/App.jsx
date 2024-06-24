import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Cardlist from "./Cardlist";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      robots: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div>
        <SearchBox searchField={this.state.searchField} searchChange={this.onSearchChange} />
        <Cardlist robots={filteredRobots} />
        <Footer />
      </div>
    );
  }
}

export default App;
