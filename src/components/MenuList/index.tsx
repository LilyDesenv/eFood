import { MenuItem } from '../../pages/Home'
import MenuCard from '../MenuCard'
import { List } from './styles'

type Props = {
  menu: MenuItem[]
}

const MenuList = ({ menu }: Props) => (
  <List>
    {menu.map((food) => (
      <li key={food.id}>
        <MenuCard
          title={food.nome}
          descricao={food.descricao}
          image={food.foto}
          portion={food.porcao}
          price={food.preco}
        />
      </li>
    ))}
  </List>
)

export default MenuList
