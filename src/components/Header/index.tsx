import React from 'react'
import { MdFavorite, MdShoppingCart } from 'react-icons/md'
import { Input } from '../Input'
import { Link } from 'react-router-dom';
import { Content, Wrapper, IconContent, SearchContent, CountdownCart } from './styles'
import { ShoppingCartOpenContext } from '../../contexts/shoppingCartOpen';
import { ItemsCartContext } from '../../contexts/itemsCart';
import { MoviesContext } from '../../contexts/movies';
import api from '../../services/api'

const API_KEY = '269fb16c1d2acd86bdab286789f89492'

export function Header() {
  const { isOpen, setIsOpen } = React.useContext(ShoppingCartOpenContext)
  const { itemsCart } = React.useContext(ItemsCartContext)
  const { setMovies } = React.useContext(MoviesContext)

  const handleSearchQuery = async (input: any) => {
    if (input.target.value.length >= 3) {
      const response = await api.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(input.target.value)}&page=1&include_adult=false`)

      setMovies({ movies: response.data.results, isSearch: true, currentPage: 1, querySearch: input.target.value })
    }

    if (input.target.value.length === 0) {
      const response = await api.get(`/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)

      setMovies({ movies: response.data.results })
      setMovies({ movies: response.data.results, isSearch: false, currentPage: 1, querySearch: '' })
    }
  }

  return (
    <Wrapper>
      <Content>
        <Link to='/'><h4>Massi Movies</h4></Link>
        <SearchContent>
          <Input type="text" name="SearchFilm" placeholder="Pesquisa" onChange={(input: any) => handleSearchQuery(input)} />
        </SearchContent>
        <IconContent>
          <MdFavorite size={24} />
          <MdShoppingCart size={24} onClick={() => setIsOpen(!isOpen)} />
          <CountdownCart>{itemsCart.length}</CountdownCart>
        </IconContent>
      </Content>
    </Wrapper>
  )
}