
import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Menu from './components/Menu';


function App() {

  return (
    <div>
      <Menu />
      <SearchBar placeholder='Search Pokémon'></SearchBar>
    </div>
  );
}

export default App;
