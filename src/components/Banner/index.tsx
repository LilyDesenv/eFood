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

const Banner = () => (
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
    <BannerImg style={{ backgroundImage: `url(${fundoRest})` }}>
      <div className="container">
        <NameCategory>Italiana</NameCategory>
        <NameRestaurant>La Dolce Vita Trattoria</NameRestaurant>
      </div>
    </BannerImg>
  </>
)

export default Banner
