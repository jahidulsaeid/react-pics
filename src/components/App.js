import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 9wgpzb224ExFetb_dJQQoXP7L5ScDhQVX2lFfG3vI4s",
      },
    });
    console.log(response.data.results);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
