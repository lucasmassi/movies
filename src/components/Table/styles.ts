import styled from 'styled-components'

export const Wrapper = styled.table`
  width: 100%;

  thead {
    text-align: left;

    th {
      color: #1d2a36;
    }
  }

  td {
    transition: .2s;

    img {
      max-width: 80px;
      border-radius: 3px;
    }

    svg {
      cursor: pointer;
      color: #1d2a36;
    }

    &:hover {
      transition: .2s;
      opacity: .7;
    }
  }
`