import React from 'react'
import { MdDelete } from 'react-icons/md'
import { Wrapper, Header, FilmList, FilmItem, Footer, Total } from './styles'
import { Button } from '../Button'
import { Link } from 'react-router-dom';
import { ShoppingCartOpenContext } from '../../contexts/shoppingCartOpen'
import { ItemsCartContext } from '../../contexts/itemsCart';

const URL_IMAGES = 'https://image.tmdb.org/t/p/original'

export function ShoppingCart() {
  const { isOpen, setIsOpen } = React.useContext(ShoppingCartOpenContext)
  const { itemsCart, setItemsCart } = React.useContext(ItemsCartContext)

  let total = 0
  itemsCart.map((item: any) => {
    total = total + (item.qtd * (item.movie.vote_average*2))

    return item
  })

  const handleRemoveItem = (movieId: any) => {
    const newItems: any = [] 
    
    itemsCart.map((item: any) => {
      if (item.movie.id === movieId) {
        item.qtd = item.qtd - 1
      }

      if (item.qtd > 0) {
        newItems.push(item)
      }

      return item
    })

    setItemsCart(newItems)
  }

  return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <h3>Meu carrinho</h3>
        <button type='button' onClick={() => setItemsCart([])}>Esvaziar</button>
      </Header>
      <FilmList>
        {itemsCart.map((item: any) => {
          const image = URL_IMAGES + item.movie.poster_path
          const formattedTitle = item.movie.title.substr(0, 19);
          const price = item.movie.vote_average * 2

          return (
            <FilmItem key={item.movie.id}>
              <img src={image} alt={item.movie.title} />
              <p>{formattedTitle}</p>
              <p>{item.qtd}</p>
              <p>R$ {price.toFixed(2)}</p>
              <p><MdDelete size={20} onClick={() => handleRemoveItem(item.movie.id)} /></p>
            </FilmItem>
          )
        })}
      </FilmList>
      <Footer>
        <Total>
          <h4>Total: </h4>
          <h2>R$ { total.toFixed(2) }</h2>
        </Total>
        <Link to='/checkout'><Button type="button" text="Finalizar compra" onClick={() => setIsOpen(false)} /></Link>
      </Footer>
    </Wrapper>
  )
}