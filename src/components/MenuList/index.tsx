import MenuCard from '../MenuCard'
import { List } from './styles'

type Props = {
  menu: MenuItem[]
}

const MenuList = ({ menu }: Props) => (
  <List>
    {menu.map((food) => (
      <li key={food.id}>
        <MenuCard menuItem={food} />
      </li>
    ))}
  </List>
)

export default MenuList
