import React, { useState } from 'react';

export const MoviesContext = React.createContext<any>([]);
 
export const MoviesProvider: any = (props: any) => {
  const [movies, setMovies] = useState({
    movies: [],
    currentPage: 1,
    isSearch: false,
    querySearch: '',
  })

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {props.children}
    </MoviesContext.Provider>
  )
}
