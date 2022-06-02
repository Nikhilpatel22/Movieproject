import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Moviehome from './movie/Moviehome';
import MovieDetails from './movie/MovieDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>     
          <Route path='/' element={<Moviehome/>}></Route>
         
          <Route path='/moviedetails/:movieId' element={<MovieDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
