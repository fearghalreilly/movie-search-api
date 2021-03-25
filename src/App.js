import React, { useState, useEffect, useContext  } from 'react';
import axios from 'axios';


//CSS
import './App.css';

//Components
import Nav from './components/Nav'
import Movies from './components/Movies'

//Pages
import Home from './pages/Home'

//State
import  MovieState from './context/movies/MovieState';
import MovieContext from './context/movies/movieContext';

function App() {

  const movieContext = useContext(MovieContext);





  return (
    <>
    <MovieState>
      <Movies />
    </MovieState>
    </>
  );
}

export default App;
