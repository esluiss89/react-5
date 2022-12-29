import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
// components
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const fetchData = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData(url);
  }, [fetchData, url]);

  const handleNextPage = useCallback(() => {
    fetchData(info.next);
    window.scrollTo(0, 0);
  }, [fetchData, info]);

  const handlePreviousPage = useCallback(() => {
    fetchData(info.prev);
    window.scrollTo(0, 0);
  }, [fetchData, info]);

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container py-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>

      <CharacterList characters={characters} />

      <div className="container pb-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
