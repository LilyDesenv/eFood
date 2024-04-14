import RestaurantCard from '../RestaurantCard'
import { RestList } from './styled'

const RestaurantList = () => (
  <RestList>
    <li>
      <RestaurantCard></RestaurantCard>
    </li>
    <li>
      <RestaurantCard></RestaurantCard>
    </li>
    <li>
      <RestaurantCard></RestaurantCard>
    </li>
    <li>
      <RestaurantCard></RestaurantCard>
    </li>
  </RestList>
)

export default RestaurantList
