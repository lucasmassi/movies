import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1200px;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 60px;
`

export const FormContent = styled.form`
  display: block;
  width: 50%;
  margin-top: 30px;

  h2 {
    margin-bottom: 15px;
    font-weight: 200;
    color: #1d2a36;
  }

  input {
    width: 90%;
    margin-bottom: 25px;
  }

  button {
    width: 90%;
  }
`

export const OrderContent = styled.div`
  display: block;
  width: 50%;
  margin-top: 70px;
`

export const FormGroup = styled.div`
  width: 90%;
  justify-content: space-between;
  display: flex;
  
  input:first-child {
    margin-right: 10px;
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
  overflow-x: hidden;
  overflow-y: auto;
  white-space: nowrap;
  max-height: 300px;
`