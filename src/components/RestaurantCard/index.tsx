import { Link } from 'react-router-dom'
import {
  DescricaoCard,
  Infos,
  NameInfo,
  Nota,
  RestCard,
  RestImage,
  Star,
  TituloCard
} from './styles'
import star from '../../assets/images/star.png'
import { Button } from '../../styles'
import { TagContainer } from '../Tag/styles'

type Props = {
  title: string
  image: string
  score: number
  infos: string[]
  description: string
  id: number
}

const RestaurantCard = ({
  title,
  image,
  score,
  infos,
  description,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 278) {
      return description.slice(0, 275) + '...'
    }
    return description
  }

  return (
    <RestCard>
      <RestImage src={image} />
      <Infos>
        {infos.map((info) => (
          <TagContainer key={info}> {info} </TagContainer>
        ))}
      </Infos>

      <NameInfo>
        <TituloCard>{title}</TituloCard>
        <Nota>
          <TituloCard>{score}</TituloCard>
          <Star src={star} />
        </Nota>
      </NameInfo>
      <DescricaoCard>{getDescription(description)}</DescricaoCard>
      <Button>
        <Link to={`/restaurants/${id}`}>Saiba mais</Link>
      </Button>
    </RestCard>
  )
}

export default RestaurantCard
