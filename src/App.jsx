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
  },
  {
    id: 4,
    title: "Nos jours heureux",
    year: "2006",
    genre: "Comédie",
    director: "Olivier Nakache & Eric Toledano",
    summary: "Vincent Rousseau va diriger pour la première fois de sa vie une colonie de vacances. Dès le départ en train, les enfants sont ingérables : l'une a perdu sa valise, l'autre assomme tout le monde de questions... A leur arrivée au château, animateurs et enfants s'installent. Commence alors le quotidien houleux de cette colonie. Entre les animateurs complètement déjantés, les gamins intenables et les visites surprises de «Jeunesse et Sport», ces trois semaines vont être plus mouvementées que prévues...",
    img: "src/assets/NOS JOURS HEUREUX.jpg",
    favorite: false
  },
  {
    id: 5,
    title: "Princesse Mononoke",
    year: "1997",
    genre: "Animation",
    director: "Hayao Miyazaki",
    summary: "Au quinzième siècle durant l’ère Muromachi, la forêt japonaise jadis protégée par des animaux géants se dépeuple à cause de l’homme. Un sanglier transformé en démon dévastateur en sort puis attaque le village d’Ashitaka, futur chef du clan Emishi. Touché par le sanglier qu’il a tué, celui-ci est forcé de partir à la recherche du dieu Cerf pour lever la malédiction qui lui gangrène le bras mais ce voyage est semé d’embûches au terme duquel il rencontre une sauvageonne surnommée la princesse Monoké, princesse des spectres...",
    img: "src/assets/PRINCESSE MONOKE.jpg",
    favorite: false
  },
  {
    id: 6,
    title: "Le bon, la brute et le truand",
    year: "1966",
    genre: "Western",
    director: "Sergio Leone",
    summary: "Tuco Benedicto Pacifico Juan Maria Ramirez est un criminel dont la tête est mise à prix. Tuco est de connivence avec Blondin, celui-ci le livre aux autorités, encaisse la prime, et libère ensuite son complice avant d'être pendu. Sentenza, un tueur sans pitié, apprend l'existence d'un coffre rempli de pièces d'or confédérées, caché par un soldat nommé Bill Carson. Blondin décide de rompre avec Tuco, et l'abandonne dans le désert. Celui-ci réussis à survivre et décide de se venger. Il retrouve rapidement Blondin et l'oblige à le suivre à pied dans le désert. Là, ils trouvent une diligence remplie de soldats confédérés, moribonts. Parmi ceux-ci se trouve Bill Carson, l'homme recherché par Sentenza, qui révèle à Tuco le nom du cimetière où se trouve l'or, mais demande de l'eau en échange du nom sur la tombe. Pendant que Tuco va chercher une gourde, Carson meurt, après avoir donné le nom de la tombe à Blondin, qui tout à coup devient très important pour Tuco...",
    img: "src/assets/LE BON LA BRUTE ET LE TRUAND.jpg",
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

const setSearchedMovie = (title) => {
  const searchedMovie = moviesData.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
  setMovies(searchedMovie);
}

  return (
    <>
      <NavBar moviesData={moviesData} filters={filters} setGenre={setGenre} setSearchedMovie={setSearchedMovie}/>
      {moviesData.some((movie) => movie.favorite) ? <h2>Ma liste</h2> : ""}
      <div className='favorites-container'>
        {movies
          .filter((movie) => movie.favorite)
          .map((movie) => (
            <MovieCard img={movie.img} id={movie.id} favorite={movie.favorite} key={movie.id} setFav={setFav} />
        ))}
      </div>
      <h2>Liste des films</h2>
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
