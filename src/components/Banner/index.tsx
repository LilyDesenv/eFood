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
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  title: string
  cover: string
  type: string
}

const Banner = ({ title, cover, type }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <BannerContainer>
        <div className="container">
          <DivGroup>
            <TextTitle>Restaurantes</TextTitle>
            <Link to={'/'}>
              <Logo src={logo} />
            </Link>
            <TextCart onClick={openCart}>
              {items.length} produto(s) no carrinho
            </TextCart>
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
