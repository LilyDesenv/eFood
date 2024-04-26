import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import MenuList from '../../components/MenuList'
import { useGetRestaurantByIdQuery } from '../../services/api'
import Loader from '../../components/Loader'

type RestaurantParam = {
  id: string
}

const Restaurant = () => {
  const { id } = useParams() as RestaurantParam

  const { data: restaurant } = useGetRestaurantByIdQuery(id)

  if (!restaurant) {
    return <Loader />
  }
  const foods = restaurant.cardapio

  return (
    <>
      <Banner
        type={restaurant.tipo}
        title={restaurant.titulo}
        cover={restaurant.capa}
      />
      <div className="container">
        <MenuList menu={foods} />
      </div>
    </>
  )
}

export default Restaurant
