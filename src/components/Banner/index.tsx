import { Logo } from '../../styles'
import {
  BannerContainer,
  BannerImg,
  DivGroup,
  NameCategory,
  NameRestaurant,
  TextCart,
  TextTitle
} from './styles'
import logo from '../../assets/images/logo.png'
import fundoRest from '../../assets/images/trattoriaBanner.png'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  cover: string
  type: string
}

const Banner = ({ title, cover, type }: Props) => {
  return (
    <>
      <BannerContainer>
        <div className="container">
          <DivGroup>
            <TextTitle>Restaurantes</TextTitle>
            <Link to={'/'}>
              <Logo src={logo} />
            </Link>
            <TextCart>0 produto(s) no carrinho</TextCart>
          </DivGroup>
        </div>
      </BannerContainer>

      <BannerImg style={{ backgroundImage: `url(${cover})` }}>
        <div className="container">
          <NameCategory>{type}</NameCategory>
          <NameRestaurant>{title}</NameRestaurant>
        </div>
      </BannerImg>
    </>
  )
}

export default Banner
