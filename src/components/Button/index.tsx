import { ButtonStyle } from './styles'

export function Button({ text, type, ...rest }: any) {
  return (
    <ButtonStyle type={type} { ...rest }>
      { text }
    </ButtonStyle>
  )
}