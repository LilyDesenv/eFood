import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import MenuList from '../../components/MenuList'
import { Restaurant as Res } from '../Home'

const Restaurant = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Res>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setRestaurant(resp))
  }, [id])

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
