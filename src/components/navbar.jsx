import { useState } from 'react'
import './navbar.css'

function NavBar({moviesData, filters, setGenre, setSearchedMovie}) {

  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreClick = (genre) => {
    if(genre === selectedGenre) {
      setSelectedGenre("");
      setGenre("");
    } else {
      setSelectedGenre(genre);
      setGenre(genre);
    }
  }
  
  const handleSearch = (title) => {
    setSearchedMovie(title);
  }

  return(
    <>
    <h1>WILDFLIX</h1>
    <input type='text' placeholder='Rechercher un film' onChange={(e) => handleSearch(e.target.value)} />
    <div className="filters-buttons">
      {filters.map((genre) => (
        <button key={genre} onClick={() => handleGenreClick(genre)}>{genre}</button>
      ))}
    </div>
    </>
  );
}

export default NavBar;