import { useState } from 'react';
import './moviecard.css'
import { BsBookmarkPlus } from "react-icons/bs"
import { BsFillBookmarkHeartFill } from "react-icons/bs"

function MovieCard({title, year, genre, director, summary, img, id, favorite ,setFav}) {
  return(
    <div className='movie-card'>
      <div className='movie-card-head'>
        <img src={img} alt={title} />
      </div>
      <div className='fav-icon'> 
        {(!favorite) ? <BsBookmarkPlus onClick={ () => setFav(id)} /> : <BsFillBookmarkHeartFill onClick={ () => setFav(id)} />}
      </div>
      {title ? 
        <div className='movie-card-body'>
          <ul>
            <li><h2>{title}</h2></li>
            <li>Année: {year}</li>
            <li>Genre: {genre}</li>
            <li>Réalisateur: {director}</li>
          </ul>
          <p>{summary}</p>
        </div>
        : ""
      }
    </div>
  );
}

export default MovieCard;