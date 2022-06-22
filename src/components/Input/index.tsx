import InputMask from 'react-input-mask';
import { Content } from './styles'

export function Input({ name, placeholder, type, ...rest } : any) {
  return (
    <Content>
      <InputMask name={name} placeholder={placeholder} type={type} { ...rest } />
    </Content>
  )
}