import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import MovieCard from './components/moviecard'

const moviesData = [
  {
    id: 1,
    title: "Le seigneur des anneaux - La communauté de l'anneau",
    year: "2001",
    genre: "Fantastique",
    director: "Peter Jackson",
    summary: "Le jeune Hobbit Frodon Sacquet hérite d'un anneau. Bien loin d'être une simple babiole, il s'agit de l'Anneau Unique, un instrument de pouvoir absolu qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu et de réduire en esclavage ses peuples. À moins que Frodon, aidé d'une Compagnie constituée de Hobbits, d'Hommes, d'un Magicien, d'un Nain, et d'un Elfe, ne parvienne à emporter l'Anneau à travers la Terre du Milieu jusqu'à la Crevasse du Destin, lieu où il a été forgé, et à le détruire pour toujours. Un tel périple signifie s'aventurer très loin en Mordor, les terres du Seigneur des ténèbres, où est rassemblée son armée d'Orques maléfiques. La Compagnie doit non seulement combattre les forces extérieures du mal mais aussi les dissensions internes et l'influence corruptrice qu'exerce l'Anneau lui-même...",
    img: "src/assets/LE SEIGNEUR DES ANNEAUX - LA COMMUNAUTE DE L'ANNEAU.jpg",
    favorite: false
  },
  {
    id: 2,
    title: "Star Wars - La menace fantôme",
    year: "1999",
    genre: "Science fiction",
    director: "Georges Lucas",
    summary: "La galaxie est gérée sous la forme d'une République galactique, par le Sénat galactique qui regroupe les représentants des différentes entités appartenant à la République, et dont le siège se situe sur la planète Coruscant. Les chevaliers Jedi, détenteurs d'un pouvoir mystique, \"La Force\", sont les gardiens de la paix et de la justice à travers la galaxie. Mais rapidement, la Fédération du Commerce envahit Naboo et tente de tuer les Jedi venus négocier, en transformant ce banal blocus commercial légal en une des crises les plus graves de la République : la Bataille de Naboo. Les Jedi réussissent à s'enfuir avec la reine de Naboo, Padmé Amidala. Durant leur fuite, ils atterrissent sur Tatooine où ils rencontrent un jeune humain esclave du nom d'Anakin Skywalker. Leur destin est lié à cet esclave, seul capable de leur permettre d'obtenir des pièces pour réparer le vaisseau...",
    img: "src/assets/STAR WARS - LA MENACE FANTOME.jpg",
    favorite: false
  },
  {
    id: 3,
    title: "Fight Club",
    year: "1999",
    genre: "Thriller",
    director: "David Fincher",
    summary: "Malgré sa situation des plus enviables, Jack, est à bout de nerfs. Il retrouve un équilibre relatif en compagnie de Marla, rencontrée dans un groupe d'entraide. Il y fait aussi la connaissance de Tyler Durden, personnage enthousiaste et charismatique. Ensemble, ils fondent le Fight Club, où ils organisent des combats clandestins et violents, destinés à évacuer l'ordre établi. Le club connaît un succès grandissant, et Tyler lève une armée en enrôlant les adhérents, afin de renverser le régime capitaliste. Pendant ce temps, Jack multiplie les accès de violence, et son comportement devient de plus en plus étrange. Un jour, Tyler disparaît...",
    img: "src/assets/FIGHT CLUB.jpg",
    favorite: false
  }
]

function App() {

  const [movies, setMovies] = useState(moviesData);

  const setFav = (id) => {
    const newMovie = [...movies];
    const myMovie = newMovie.find(mv => mv.id === id);
    const index = newMovie.indexOf(myMovie);
    newMovie[index].favorite = !newMovie[index].favorite;
    setMovies(newMovie);
  }

const setGenre = (genre) => {
  if (genre) {
    const filteredMovies = moviesData.filter(movie => movie.genre === genre);
    setMovies(filteredMovies);
  } else {
    setMovies(moviesData);
  }
}

const filters = [...new Set(moviesData.map(movie => movie.genre))];


  return (
    <>
      <NavBar filters={filters} setGenre={setGenre}/>
      <div className='favorites-container'>
        {movies
          .filter((movie) => movie.favorite)
          .map((movie) => (
            <MovieCard img={movie.img} id={movie.id} favorite={movie.favorite} key={movie.id} setFav={setFav} />
        ))}
      </div>
      <div className='movies-container'>
        {movies
        .map((movie) => (
          <MovieCard {...movie} key={movie.id} setFav={setFav} />
        ))}
      </div>
    </>
  )
}

export default App
