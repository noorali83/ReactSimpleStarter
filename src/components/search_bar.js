import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "Search"
    }
  }

  render() {
    var searchText = this.state.searchValue;
    return (< div > < input type = "text" value = {this.state.searchValue }> < /input>< /div >
    );
  }

}

export default SearchBar;
