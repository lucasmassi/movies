import { Content } from './styles'

export function Input({ name, placeholder, type, ...rest } : any) {
  return (
    <Content name={name} placeholder={placeholder} type={type} { ...rest } />
  )
}