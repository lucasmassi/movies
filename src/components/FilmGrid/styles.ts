import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 1200px;
  text-align: center;
  margin-top: 30px;
  padding: 50px;
`

export const FilmCard = styled.div`
  background-color: #FFFFFF;
  color: #181515;
  border: 2px solid rgba(75, 92, 107, .3);
  border-radius: 5px;
  max-width: 250px;
  display: inline-block;
  align-self: flex-end;

  img {
    max-width: 100%;
    height: 370px;
  }
`

export const CardDetails = styled.div`
  max-height: 200px;
  border-top: 1px solid #727272;
  max-width: 250px;
  background: #FFFFFF;
  padding: 10px;

  h2 {
    font-size: 16px;
  }

  h2, h3, h4, h6 {
    color: #1d2a36
  }

  h4 {
    font-weight: 300;
    display: flex;
    justify-content: center;

    strong {
      display: flex;
      align-items: center;
    }
  }

  strong {
    margin-right: 10px;

    svg {
      margin-right: 5px;
    }
  }
`

export const HeaderDetails = styled.div`
  display: flex;
  justify-content: right;

  svg {
    position: absolute;
    color: #FFFFFF;
    cursor: pointer;
    padding: 1px;
  }
`

export const LoadingContent = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  color: #6558f5;
  padding-bottom: 50px;

  svg {
    animation: ${rotate} 1s linear infinite;
    opacity: .7;
  }
`