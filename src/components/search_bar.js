import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "Search"
    }
  }

  render() {
    var searchText = this.state.searchText;
    return (< div > < input type = "text" 
                        onChange ={this.onInputChange}> < /input>< /div >
    );
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

}

export default SearchBar;
