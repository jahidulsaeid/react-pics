import React, { Component } from "react";

class SearchBar extends Component {
  onInoutChange(event) {
      console.log(event.target.value);
      
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" action="" method="get">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={this.onInoutChange} /> */}
            <input type="text" onChange={(e) => console.log(e.target.value)} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
