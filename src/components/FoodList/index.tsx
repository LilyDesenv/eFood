import Food from '../../models/Food'
import FoodCard from '../FoodCard'
import { List } from './styles'

type Props = {
  foods: Food[]
}

const FoodList = ({ foods }: Props) => (
  <List>
    {foods.map((food) => (
      <li key={food.id}>
        <FoodCard
          title={food.title}
          descricao={food.descricao}
          image={food.image}
        />
      </li>
    ))}
  </List>
)

export default FoodList
