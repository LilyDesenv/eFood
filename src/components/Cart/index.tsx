import {
  CartContainer,
  CartItem,
  MsgEmptyCart,
  Overlay,
  Prices,
  Sidebar
} from './styles'
import foto from '../../assets/images/margerita.png'
import { formataPreco } from '../MenuCard'
import { CardButton } from '../MenuCard/styles'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, currentValue) => {
      return (acumulador += currentValue.preco)
    }, 0)
  }

  const removeItemCart = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'isOpen' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.length > 0 ? (
            <>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto}></img>
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formataPreco(item.preco)}</p>
                  </div>
                  <button
                    onClick={() => removeItemCart(item.id)}
                    className="delete"
                    type="button"
                  />
                </CartItem>
              ))}
            </>
          ) : (
            <MsgEmptyCart>
              <p>Carrinho Vazio!</p>
            </MsgEmptyCart>
          )}
        </ul>
        <Prices>
          <div>Valor Total </div>
          <span>{formataPreco(getTotalPrice())}</span>
        </Prices>
        <CardButton>Continuar com a entrega</CardButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
