import styled from 'styled-components'

export const Wrapper = styled.form`
  max-width: 1200px;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 60px;
`

export const FormContent = styled.div`
  display: block;
  width: 50%;
  margin-top: 30px;

  h2 {
    margin-bottom: 15px;
    font-weight: 200;
    color: #1d2a36;
  }

  input {
    width: 95%;
    margin-bottom: 25px;
  }

  button {
    width: 90%;
  }

  span {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 95%;
    background: #f5bd58;
    padding: 5px;
    border-radius: 5px;
    color: #1d2a36;
    
    svg {
      margin-right: 10px;
    }
  }
`

export const OrderContent = styled.div`
  display: block;
  width: 50%;
  margin-top: 70px;
`

export const FormGroup = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;

  input {
    width: 90%;
  }
`

export const Footer = styled.div`
  display: block;
  bottom: 0;
  width: 100%;
  align-items: baseline;
  margin-top: 20px;
  margin-bottom: 30px;

  button {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #1d2a36;
  align-items: baseline;
`

export const OverflowContent = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: nowrap;
  max-height: 300px;
`

export const CartEmpty = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  a {
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #1d2a36;
    opacity: .5;
    transition: .2s;

    svg {
      margin-right: 10px;
    }

    &:hover {
      transition: .2s;
      opacity: .8;
    }
  }
`