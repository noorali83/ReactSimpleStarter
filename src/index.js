import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const Videos = () => {
  return ( <div>
  			<div> my Videos </div>
  	        <div> <SearchBar /> </div> 
  	       </div>
  	);
}

ReactDOM.render( < Videos / > , document.querySelector(".container"));
