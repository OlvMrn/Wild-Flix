import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import MovieCard from './components/moviecard'

const movies = [
  {
    title: "Le seigneur des anneaux - La communauté de l'anneau",
    year: "2001",
    genre: "Fantastique",
    director: "Peter Jackson",
    img: "src/assets/LE SEIGNEUR DES ANNEAUX - LA COMMUNAUTE DE L'ANNEAU.jpg",
    favorite: false
  },
  {
    title: "Star Wars - La menace fantôme",
    year: "1999",
    genre: "Science fiction",
    director: "Georges Lucas",
    img: "src/assets/STAR WARS - LA MENACE FANTOME.jpg",
    favorite: false
  }
]

function App() {

  return (
    <>
      <NavBar />
      <div className='movies-container'>
        {movies.map((movie, index) => (
          <MovieCard {...movie} key={index} />
        ))}
      </div>
    </>
  )
}

export default App
