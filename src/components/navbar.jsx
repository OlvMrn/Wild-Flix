import { useState } from 'react'

function NavBar({filters, setGenre}) {

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
  
  return(
    <>
    <div>NAVBAR</div>
    <div className="filters-buttons">
      {filters.map((genre) => (
        <button key={genre} onClick={() => handleGenreClick(genre)}>{genre}</button>
      ))}

    </div>
    </>
  );
}

export default NavBar;