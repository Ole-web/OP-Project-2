import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Headers from "./components/Header/header";
import Home from "./pages/Home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/MovieDetail/movieDetail";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Headers></Headers>
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path="movie/:id" element={<Movie />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="/*" element={<h2>Error Page</h2>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
