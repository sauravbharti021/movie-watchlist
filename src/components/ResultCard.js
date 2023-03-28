import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ResultCard =({movie})=>{

    const {addToWatchlist, watchlist, watched, addMoviesToWatched} = useContext(GlobalContext);

    const addInWatchlist = () => {

        const flag  = watchlist.find((films)=> films.id=== movie.id );

        if(!flag){
            addToWatchlist(movie);
           
        }
    }
    const disableWatchlist= watchlist.find((films)=> films.id=== movie.id ) || watched.find((films) => films.id === movie.id ) ;

    const disableWatched = watched.find((films)=> films.id=== movie.id);  

    return(
        <div className="result-card">
            <div className="poster-wrapper">
                {
                    movie.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}  />

                    ) : (
                        <div className="filler-poster"></div>
                    )
                }
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title} </h3>
                    <h4 className="release-date">
                        { movie.release_date ? movie.release_date.substring(0,4) : "-"}
                        </h4>
                </div>
                <div className="controls">
                <button className="btn" disabled={disableWatchlist}  onClick={addInWatchlist} > Add to watchlist </button>

                <button className="btn" disabled={disableWatched}  onClick={() =>addMoviesToWatched(movie)} > Add to watched </button>
                </div>

            </div>
            
            

        </div>
    )
}
export default ResultCard;