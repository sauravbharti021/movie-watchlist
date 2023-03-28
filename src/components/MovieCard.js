import React from 'react';
import MovieControls from './MovieControls';
import overlay from '../images/overlay-alt.jpg'
import { Fragment } from 'react';
const MovieCard = ({movie, type}) => {
  return (
    <Fragment>
      <div className="movie-card" >
          <div className="overlay" id="overlay"></div>
          
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster` }
            />

          <MovieControls movie={movie} type={type}  />
      </div>
      

    </Fragment>
  )
}
export default MovieCard;