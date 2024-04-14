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
import hioki from '../../assets/images/hiokiSushi.png'
import star from '../../assets/images/star.png'
import { Button } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

const RestaurantCard = () => (
  <RestCard>
    <RestImage src={hioki} />
    <NameInfo>
      <TituloCard>Hioki Sushi</TituloCard>
      <Nota>
        <TituloCard>4.9</TituloCard>
        <Star src={star} />
      </Nota>
    </NameInfo>
    <Infos>
      <TagContainer> Nome da Tag </TagContainer>
    </Infos>
    <DescricaoCard>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida.
      <br />
      Experimente o Japão sem sair do lar com nosso delivery!
    </DescricaoCard>
    <Button>
      <Link to="/restaurants">Saiba mais</Link>
    </Button>
  </RestCard>
)

export default RestaurantCard
