import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  display: flex;

  input {
    background-color: white;
    border-radius: 5px;
    width: 100%;
    border: 2px solid transparent;
    padding: 15px;
    border-radius: 3px;
    transition: 0.2s;
    outline: none;

    &:hover, &:active, &:focus-visible {
      transition: 0.2s;
      border: 2px solid #6558f5;
    }
  }
`