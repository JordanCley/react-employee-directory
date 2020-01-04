import React from 'react';
import Table from "../Table/Table"
import Jumbotron from "../Jumbotron/Jumbotron"
import SearchBar from '../SearchBar/SearchBar';


function App() {

  return (
   <div>
     <Jumbotron />
     <SearchBar />
     <Table />
   </div>
  );
}

export default App;
