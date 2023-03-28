import React from 'react'
import { createContext, useState, useEffect,useReducer } from 'react';

const addWatchlist =(watchlist, movie) => {
    return [...watchlist, movie];
}

const removeWatchlist = (watchlist,movie)=>{
    return watchlist.filter(films=> films.id!== movie.id);
}

const addMoviesWatched = (watched, movie)=>{
    
    return [...watched, movie] ;
}
const removeWatched = (watched, movie)=> {
    return watched.filter(films=> films.id!== movie.id );
}


export const GlobalContext = createContext({
    watchlist : localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [] ,
    watched : localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
    addToWatchlist : ()=>{},  
    removeFromWatchlist : ()=> {},
    addMoviesToWatchedThroughWatchlist : ()=> {},
    removeFromWatched : ()=>{},
    addMoviesBackToWatchlist : ()=> {},
    addMoviesToWatched : ()=> {},
}) 

export const GlobalProvider =({children}) =>{


    const [watchlist, setWatchlist] = useState(localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : []);
    const [watched, setWatched] =useState(localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : []);

    
    const addToWatchlist =(movie)=>{
        setWatchlist(addWatchlist(watchlist, movie));
    }
    const removeFromWatchlist= (movie)=>{
        setWatchlist(removeWatchlist(watchlist, movie));
    }
    const addMoviesToWatchedThroughWatchlist = (movie) =>{
        setWatched(addMoviesWatched(watched, movie));
        removeFromWatchlist(movie);
        
    } 
    const removeFromWatched = (movie) => {
        setWatched(removeWatched(watched, movie));
    }
    const addMoviesBackToWatchlist= (movie) =>{
        removeFromWatched(movie);
        addToWatchlist(movie);
    }
    const addMoviesToWatched = (movie) => {
        addToWatchlist(movie);
        addMoviesToWatchedThroughWatchlist(movie);
    }


    useEffect(()=> {
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
    }, [watchlist])
    useEffect(()=> {
        localStorage.setItem('watched', JSON.stringify(watched))
    }, [watched])



    const value = {
        watchlist,
        watched,
        addToWatchlist,
        removeFromWatchlist,
        addMoviesToWatchedThroughWatchlist,
        removeFromWatched,
        addMoviesBackToWatchlist,
        addMoviesToWatched
    }
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider> 
}
