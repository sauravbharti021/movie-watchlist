import React from 'react'
import { Fragment } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({movie, type}) => {
    const {removeFromWatchlist, addMoviesToWatchedThroughWatchlist, 
        removeFromWatched, addMoviesBackToWatchlist} = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
        {
            type=== 'watchlist' && (
                <Fragment>
                    <button className='ctrl-btn'  onClick={()=> addMoviesToWatchedThroughWatchlist(movie) } >
                        <i className='fa-fw far fa-eye'> </i>
                    </button>

                    <button className='ctrl-btn' onClick={()=> removeFromWatchlist(movie)} >
                        <i className='fa-fw fa fa-times'> </i>
                    </button>
                </Fragment>
            )
        }
        {
            type=== 'watched' && (
                <Fragment>
                    <button className='ctrl-btn'  onClick={()=> addMoviesBackToWatchlist(movie) } >
                        <i className='fa-fw far fa-eye-slash'> </i>
                    </button>
                    <button className='ctrl-btn'  onClick={()=> removeFromWatched(movie) } >
                        <i className='fa-fw fa fa-times'> </i>
                    </button>
                </Fragment>
            )
        }
    </div>
  )
}
export default MovieControls;