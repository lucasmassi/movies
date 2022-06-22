import styled from 'styled-components'

export const Wrapper = styled.header`
  background: #6558f5;
  position: fixed;
  display: block;
  width: 100%;
  top: 0;
  z-index: 1;
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;

  a {
    text-decoration: none;
    color: white;

    &:hover {
      opacity: .7;
    }
  }
`

export const IconContent = styled.div`
  svg {
    cursor: pointer;
    &:hover {
      opacity: .7;
    }

    :first-child {
      margin-right: 1rem;
    }
  }
`

export const SearchContent = styled.div`
  background-color: white;
  border-radius: 5px;

  input {
    width: 20rem;
    padding: .2rem;
  }
`

export const CountdownCart = styled.span`
  width: 17px;
  height: 17px;
  font-size: .7rem;
  border-radius: 50px;
  background-color: #ffab00;
  position: absolute;
  margin-left: -6px;
  text-align: center;
  margin-top: -5px;
`