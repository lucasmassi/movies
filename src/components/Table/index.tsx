import { Wrapper } from './styles'

export const Table = ({ columns, data } : { columns: any, data: any }) => {
  return (
    <Wrapper>
      <thead>
        <tr>
          {columns.map((column: any) => {
            return <th key={column}>{ column }</th>
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any) => {
          return ( 
            <tr key={item.id}>
              <td><img src={item.image} alt={item.name} /></td>
              <td>{ item.name }</td>
              <td>{ item.qtd }</td>
              <td>{ item.price }</td>
              <td>{ item.action }</td>
            </tr>
          )
        })}
      </tbody>
    </Wrapper>
  )
};