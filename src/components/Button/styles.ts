import styled from 'styled-components'

export const ButtonStyle = styled.button`
  width: 100%;
  background: #6558F5;
  color: #FFFFFF;
  border-radius: 3px;
  border: 3px solid transparent;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: 0.2s;
  font-size: 20px;
  
  &:hover {
    transition: 0.2s;
    border: 3px solid #6558F5;
    background: transparent;
    color: #6558F5;
  }
`