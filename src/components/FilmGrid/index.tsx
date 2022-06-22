import React, { useEffect, useState } from 'react'
import { MdFavorite, MdStars, MdMotionPhotosOn } from "react-icons/md";
import { Button } from "../Button";
import { Wrapper, FilmCard, CardDetails, HeaderDetails, LoadingContent } from "./styles";
import api from '../../services/api'
import { ItemsCartContext } from '../../contexts/itemsCart';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MoviesContext } from '../../contexts/movies';

const URL_IMAGES = 'https://image.tmdb.org/t/p/original'
const API_KEY = '269fb16c1d2acd86bdab286789f89492'

export function FilmGrid() {
  const { itemsCart, setItemsCart } = React.useContext(ItemsCartContext)
  const { movies, setMovies } = React.useContext(MoviesContext)
  const [currentPage, setCurrentPage ] = useState(movies.currentPage)
  const [isSearch, setIsSearch] = useState(movies.isSearch)

  useEffect(() => {
    setIsSearch(movies.isSearch)
  },[movies])

  useEffect(() => {
    async function listMovies() {
      const response = await api.get(`/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${currentPage}`)

      setMovies({ movies: response.data.results })
    }

    listMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddItemToCart = (movie: any) => {
    let movieQtd = 1
    let isListed = false

    itemsCart.length > 0 && itemsCart.map((item: any) => {
      if (item.movie.id === movie.id) {
        item.qtd = item.qtd + 1

        isListed = true;
      }

      return item
    })

    if (itemsCart.length <= 0 || !isListed) {
      setItemsCart([...itemsCart, { qtd: movieQtd, movie }])

      return
    }

    setItemsCart(itemsCart)
  }

  const fetchMoreData = () => {
    setTimeout(async () => {
      if (isSearch) {
        const response = await api.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(movies.querySearch)}&page=${currentPage + 1}&include_adult=false`)

        setCurrentPage(currentPage + 1)
        setMovies({
          movies: [...movies.movies, ...response.data.results],
          currentPage: currentPage + 1
        })
      } else {
        const response: any = await api.get(`/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${currentPage + 1}`)
        
        setCurrentPage(currentPage + 1)
        setMovies({
          movies: [...movies.movies, ...response.data.results],
          currentPage: currentPage + 1
        })
      }
    }, 1500);
  };

  return (
    <InfiniteScroll
        dataLength={movies.movies.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<LoadingContent><MdMotionPhotosOn size={35} /></LoadingContent>}
      >
      <Wrapper>
        {movies.movies && movies.movies.map((movie: any) => {
          const image = URL_IMAGES + movie.poster_path
          const price = movie.vote_average * 2

          return (
            <FilmCard key={movie.id}>
              <HeaderDetails>
                <img src={image} alt={movie.title}/>
                <MdFavorite size={24} />
              </HeaderDetails>
              <CardDetails>
                <h2>{movie.title}</h2>
                <h4><strong><MdStars size={20} />{movie.vote_average}</strong> Votos</h4>
                <h4>R$ {price.toFixed(2)}</h4>
              </CardDetails>
              <Button type="button" text="Adicionar" onClick={() => handleAddItemToCart(movie)} />
            </FilmCard>
          )
        })}
      </Wrapper>
    </InfiniteScroll>
  )
}