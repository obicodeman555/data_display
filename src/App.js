import React, { Component } from "react";
import SearchBox from "./components/search-box/SearchBox";
import CardList from "./components/card-list/CardList";

class App extends Component {
  state = {
    users: null,
    searchField: "",
  };
  componentDidMount() {
    const url = "https://api.enye.tech/v1/challenge/records";
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({ users: result });
      });
  }

  handleChange = (event) => this.setState({ searchField: event.target.value });
  render() {
    const { users, searchField } = this.state;
    const filteredUser = users?.records?.profiles.filter(
      (profile) =>
        profile.FirstName.toLowerCase().includes(searchField.toLowerCase()) ||
        profile.CreditCardNumber.includes(searchField)
    );
    console.log(filteredUser);
    return (
      <div className="container">
        <SearchBox placeholder="Search..." handleChange={this.handleChange} />
        <CardList users={filteredUser} />
      </div>
    );
  }
}

export default App;
