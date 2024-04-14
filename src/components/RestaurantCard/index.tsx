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
}

const RestaurantCard = ({ title, image, score, infos, description }: Props) => (
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
    <DescricaoCard>{description}</DescricaoCard>
    <Button>
      <Link to="/restaurants">Saiba mais</Link>
    </Button>
  </RestCard>
)

export default RestaurantCard
