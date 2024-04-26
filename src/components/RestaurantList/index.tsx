import RestaurantCard from '../RestaurantCard'
import { RestList } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  const getInfos = (restaurant: Restaurant) => {
    const tags = []

    if (restaurant.destacado) {
      tags.push('Destaque do dia')
    }
    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }

    return tags
  }
  return (
    <RestList>
      {restaurants.map((r) => (
        <li key={r.id}>
          <RestaurantCard
            title={r.titulo}
            description={r.descricao}
            image={r.capa}
            score={r.avaliacao}
            infos={getInfos(r)}
            id={r.id}
          />
        </li>
      ))}
    </RestList>
  )
}

export default RestaurantList
