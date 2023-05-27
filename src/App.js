import React from "react";
import SearchBox from "./SearchBox";
import Cardlist from "./Cardlist";
import Footer from "./Footer";

class App extends React.Component {
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
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div>
        <SearchBox searchChange={this.searchField} />
        <Cardlist className="List" robots={filteredRobots} />
        <Footer />
      </div>
    );
  }
}

export default App;
