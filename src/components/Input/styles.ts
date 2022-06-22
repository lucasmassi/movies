import styled from 'styled-components'

export const Content = styled.input`
  background-color: white;
  border-radius: 5px;
  width: 20rem;
  border: 2px solid transparent;
  padding: 15px;
  border-radius: 3px;
  transition: 0.2s;
  outline: none;

  &:hover, &:active, &:focus-visible {
    transition: 0.2s;
    border: 2px solid #6558f5;
  }
`