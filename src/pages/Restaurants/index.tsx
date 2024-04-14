import Banner from '../../components/Banner'
import FoodCard from '../../components/FoodCard'
import FoodList from '../../components/FoodList'
import RestaurantList from '../../components/RestaurantList'

const Restaurants = () => (
  <>
    <Banner />
    <div className="container">
      <FoodList />
    </div>
  </>
)

export default Restaurants
