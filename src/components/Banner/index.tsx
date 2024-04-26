import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { Logo } from '../../styles'
import * as S from './styles'

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
      <S.BannerContainer>
        <div className="container">
          <S.DivGroup>
            <S.TextTitle>Restaurantes</S.TextTitle>
            <Link to={'/'}>
              <Logo src={logo} />
            </Link>
            <S.TextCart onClick={openCart}>
              {items.length} produto(s) no carrinho
            </S.TextCart>
          </S.DivGroup>
        </div>
      </S.BannerContainer>

      <S.BannerImg style={{ backgroundImage: `url(${cover})` }}>
        <div className="container">
          <S.NameCategory>{type}</S.NameCategory>
          <S.NameRestaurant>{title}</S.NameRestaurant>
        </div>
      </S.BannerImg>
    </>
  )
}

export default Banner
