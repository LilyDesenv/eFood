import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { RestList } from './styled'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <RestList>
    {restaurants.map((restaurant) => (
      <li key={restaurant.id}>
        <RestaurantCard
          title={restaurant.title}
          description={restaurant.descricao}
          image={restaurant.image}
          score={restaurant.nota}
          infos={restaurant.infos}
        />
      </li>
    ))}
  </RestList>
)

export default RestaurantList
