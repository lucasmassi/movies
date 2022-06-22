import React, { useEffect, useState } from 'react';
import { Wrapper, FormContent, OrderContent, FormGroup, Footer, Total, OverflowContent } from './styles'
import { Button } from '../Button'
import { MdDelete, MdReportProblem } from 'react-icons/md'
import { Input } from '../Input'
import { Table } from '../Table'
import Modal from 'react-modal'
import { Link } from 'react-router-dom';
import { ItemsCartContext } from '../../contexts/itemsCart';
import { MoviesContext } from '../../contexts/movies';

const URL_IMAGES = 'https://image.tmdb.org/t/p/original'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

export function Checkout() {
  const { itemsCart, setItemsCart } = React.useContext(ItemsCartContext)
  const { setMovies } = React.useContext(MoviesContext)
  const [data, setData] = useState<any>([])
  const [total, setTotal] = useState(0)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [dataValues, setDataValues] = useState({
    name: '',
    cpf: '',
    phone: '',
    email: '',
    cep: '',
    address: '',
    city: '',
    state: '',
  })

  useEffect(() => {
    const data: any = []
    let total = 0

    if (itemsCart.length === 0) {
      setData([])
      setTotal(0)
    }

    itemsCart.map((item: any) => {
      const price = item.qtd * (item.movie.vote_average * 2)
      data.push({
        id: item.movie.id,
        image: URL_IMAGES + item.movie.poster_path,
        name: item.movie.title,
        qtd: item.qtd,
        price: price.toFixed(2),
        action: <MdDelete size={24} />
      })

      total = total + (item.qtd * (item.movie.vote_average*2))

      return item
    })

    setTotal(total)
    setData(data)
  }, [itemsCart])
  
  const columns = [
    'Imagem',
    'Nome',
    'Qtd',
    'Preço',
    ''
  ];

  const closeModal = () => {
    setIsOpenModal(false);
  }

  const openModal = () => {
    setIsOpenModal(true);
  }

  function onSubmit(event: any) {
    event.preventDefault();

    if (dataValues.address && dataValues.cep && dataValues.city && dataValues.cpf
      && dataValues.email && dataValues.name && dataValues.phone && dataValues.state) {
        setHasError(false)
        openModal()
        return
      }
    
      setHasError(true)
  }

  return (
    <>
    <Wrapper onSubmit={onSubmit}>
      <FormContent>
        <h2>Finalizar Compra</h2>
        { hasError ? <span><MdReportProblem size={25} />Preencha todos os dados do formulário</span> : '' }
        <Input name="name" type="text" placeholder="Nome Completo" onChange={(e: any) => setDataValues({ ...dataValues, name: e.target.value }) } />
        <FormGroup>
          <Input mask="999.999.999-99" name="cpf" type="text" placeholder="CPF" onChange={(e: any) => setDataValues({ ...dataValues, cpf: e.target.value }) } />
          <Input mask="(99) 9999-9999" name="phone" type="text" placeholder="Celular" onChange={(e: any) => setDataValues({ ...dataValues, phone: e.target.value }) } />
        </FormGroup>
        <Input name="email" type="email" placeholder="E-mail" onChange={(e: any) => setDataValues({ ...dataValues, email: e.target.value }) } />
        <FormGroup>
          <Input mask="99999-999" name="cep" type="text" placeholder="CEP" onChange={(e: any) => setDataValues({ ...dataValues, cep: e.target.value }) } />
          <Input name="address" type="text" placeholder="Endereço" onChange={(e: any) => setDataValues({ ...dataValues, address: e.target.value }) } />
        </FormGroup>
        <FormGroup>
          <Input name="city" type="text" placeholder="Cidade" onChange={(e: any) => setDataValues({ ...dataValues, city: e.target.value }) } />
          <Input name="state" type="text" placeholder="Estado" onChange={(e: any) => setDataValues({ ...dataValues, state: e.target.value }) } />
        </FormGroup>
      </FormContent>
      <OrderContent>
        <OverflowContent>
          <Table columns={columns} data={data} />
        </OverflowContent>
        <Footer>
          <Total>
            <h4>Total: </h4>
            <h2>R$ {total.toFixed(2)}</h2>
          </Total>
        </Footer>
        <Button type="submit" text="Finalizar" />
      </OrderContent>
    </Wrapper>
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Obrigado Uzumaki Naruto</h2>
      <h4>Sua compra foi finalizada com sucesso!</h4>
      <Link to='/'><Button type="text" text="Ir para loja" onClick={() => closeModal()} /></Link>
    </Modal>
    </>
  )
}
