import PropTypes from 'prop-types'
import './moviecard.css'
import { BsBookmarkPlus } from "react-icons/bs"
import { BsFillBookmarkHeartFill } from "react-icons/bs"

function MovieCard({title, year, genre, director, img}) {

  return(
    <div className='movie-card'>
      <div className='movie-card-head'>
        <img src={img} alt={title} />
      </div>
      <div className='fav-icon'> <BsBookmarkPlus /> <BsFillBookmarkHeartFill /></div>
      <div className='movie-card-body'>
        <ul>
        <li><h2>{title}</h2></li>
        <li>Année: {year}</li>
        <li>Genre: {genre}</li>
        <li>Réalisateur: {director}</li>
        </ul>
      </div>
    </div>
  );
}

export default MovieCard;

//BsBookmarkPlus
//BsFillBookmarkHeartFill