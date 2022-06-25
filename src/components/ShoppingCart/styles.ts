import styled from 'styled-components'

type PropWrapper = {
  isOpen: boolean;
};

export const Wrapper = styled.div.attrs((props: PropWrapper) => ({
  isOpen: props.isOpen,
}))<PropWrapper>`
  background: #FFFFFF;
  height: calc(100% - 59px);
  width: 400px;
  position: fixed;
  right: 0;
  display: ${props => props.isOpen ? 'block' : 'none'};
  top: 63px;
  border-left: 2px solid rgba(75, 92, 107, .3);
  border-top: 2px solid rgba(75, 92, 107, .3);
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: nowrap;
  z-index: 1;

  @media (max-width: 403px) {
    width: 300px;
  }
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #1d2a36;

  h3 {
    font-weight: 200;
  }

  button {
    height: 30px;
    max-width: 100px;
    background: transparent;
    border: none;
    color: #6558F5;
    font-size: 16px;
  }
`

export const FilmList = styled.ul`
  list-style: none;
  display: block;
  width: 100%;
  margin-top: 10px;
`

export const FilmItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;

  p {
    color: #1d2a36;
  }

  p:last-child {
    transition: 0.2s;

    &:hover::after {
      content: "Remover do carrinho";
      color: #FFFFFF;
      position: absolute;
      right: 15px;
      margin-top: 25px;
      background-color: #1d2a36;
      padding: 5px;
      border-radius: 0px 3px 0px 3px;
      font-size: 14px;
      transition: 0.2s;
    }
  }

  svg {
    cursor: pointer;
  }

  img {
    width: 50px;
    height: 50px;
  }
`

export const Footer = styled.div`
  display: block;
  bottom: 0;
  width: 350px;
  align-items: baseline;
  margin-top: 20px;

  button {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media (max-width: 403px) {
    width: 260px;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #1d2a36;
  align-items: baseline;
`

export const CartEmpty = styled.h3`
  display: flex;
  width: 100%;
  align-items: center;
  opacity: .3;

  svg {
    margin-right: 10px;
  }
`