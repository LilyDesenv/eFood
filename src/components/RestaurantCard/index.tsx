import { Link } from 'react-router-dom'

import star from '../../assets/images/star.png'
import Tag from '../Tag'

import * as S from './styles'
import { Button } from '../../styles'

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
    <S.RestCard>
      <S.RestImage src={image} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>

      <S.NameInfo>
        <S.TituloCard>{title}</S.TituloCard>
        <S.Nota>
          <S.TituloCard>{score}</S.TituloCard>
          <S.Star src={star} />
        </S.Nota>
      </S.NameInfo>
      <S.DescricaoCard>{getDescription(description)}</S.DescricaoCard>
      <Button>
        <Link to={`/restaurants/${id}`}>Saiba mais</Link>
      </Button>
    </S.RestCard>
  )
}

export default RestaurantCard
