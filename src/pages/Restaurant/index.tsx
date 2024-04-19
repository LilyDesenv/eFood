import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import MenuList from '../../components/MenuList'
import { useGetRestaurantByIdQuery } from '../../services/api'

const Restaurant = () => {
  const { id } = useParams()

  const { data: restaurant, isLoading } = useGetRestaurantByIdQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
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
