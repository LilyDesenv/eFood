import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import * as r from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { getTotalPrice, parseToBRL } from '../../utils/'

import { CardButton } from '../MenuCard/styles'
import * as S from './styles'
import { usePurchaseMutation } from '../../services/api'
import { useEffect } from 'react'
import Loader from '../Loader'
import Button from '../Button'

const Cart = () => {
  const {
    isOpen,
    items,
    isCartListOpen,
    isAddressOpen,
    isPaymentsOpen,
    isConfirmsOpen
  } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const initialValues = {
    receiverName: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: '',
    cardName: '',
    cardNumber: '',
    code: '',
    cardMonth: '',
    cardYear: ''
  }

  const form = useFormik({
    initialValues,
    validationSchema: yup.object({
      receiverName: yup
        .string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: yup
        .string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: yup
        .string()
        .min(5, 'O nome da cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      zipCode: yup
        .string()
        .min(10, 'Informe o CEP completo')
        .max(10, 'Informe o CEP completo')
        .required('O campo é obrigatório'),
      number: yup
        .number()
        .required('O campo é obrigatório, coloque 0 caso não tenha número'),
      complement: yup.string(),

      cardName: yup
        .string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .when((values, squema) =>
          isPaymentsOpen ? squema.required('O campo é obrigatório') : squema
        ),
      cardNumber: yup
        .string()
        .when((values, squema) =>
          isPaymentsOpen ? squema.required('O campo é obrigatório') : squema
        ),
      code: yup
        .number()
        .when((values, squema) =>
          isPaymentsOpen ? squema.required('O campo é obrigatório') : squema
        ),
      cardMonth: yup
        .number()
        .when((values, squema) =>
          isPaymentsOpen ? squema.required('O campo é obrigatório') : squema
        ),
      cardYear: yup
        .number()
        .when((values, squema) =>
          isPaymentsOpen ? squema.required('O campo é obrigatório') : squema
        )
    }),
    onSubmit: (values, { resetForm }) => {
      if (isAddressOpen) {
        goToPayment()
      } else {
        purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco as number
          })),
          delivery: {
            receiver: values.receiverName,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.number),
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.code),
              expires: {
                month: Number(values.cardMonth),
                year: Number(values.cardYear)
              }
            }
          }
        }),
          resetForm()
      }
    }
  })

  const checkInputHasError = (fieldname: string) => {
    const isChanged = fieldname in form.touched
    const isInvalid = fieldname in form.errors

    const hasError = isChanged && isInvalid

    return hasError
  }

  const closeCart = () => {
    dispatch(r.close())
  }

  const removeItemCart = (id: number) => {
    dispatch(r.remove(id))
  }
  const goToCartList = () => {
    dispatch(r.showCartList())
  }
  const goToDelivery = () => {
    form.handleReset
    dispatch(r.showAddress())
  }

  const goToPayment = () => {
    form.validateOnChange
    dispatch(r.showPayment())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(r.showConfirm())
      dispatch(r.clear())
    }
  }, [isSuccess, dispatch])

  return (
    <S.CartContainer className={isOpen ? 'isOpen' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <div className={!isCartListOpen ? 'isHiden' : ''}>
          {items.length > 0 ? (
            <>
              <ul>
                <>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto}></img>
                      <div>
                        <h3>{item.nome}</h3>
                        <p>{parseToBRL(item.preco)}</p>
                      </div>
                      <button
                        onClick={() => removeItemCart(item.id)}
                        className="delete"
                        type="button"
                      />
                    </S.CartItem>
                  ))}
                </>
              </ul>
              <S.Prices>
                <div>Valor Total </div>
                <span>{parseToBRL(getTotalPrice(items))}</span>
              </S.Prices>
              <CardButton onClick={goToDelivery}>
                Continuar com a entrega
              </CardButton>
            </>
          ) : (
            <S.MsgEmptyCart>
              <p>Carrinho Vazio!</p>
            </S.MsgEmptyCart>
          )}
        </div>

        <form onSubmit={form.handleSubmit}>
          <div className={!isAddressOpen ? 'isHiden' : ''}>
            <S.Title>Entrega</S.Title>
            <S.InputGroup>
              <label htmlFor="receiverName">Quem irá receber</label>
              <input
                type="text"
                id="receiverName"
                name="receiverName"
                value={form.values.receiverName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('receiverName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('address') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('city') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroupFlex className="displayFlex">
              <S.InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={form.values.zipCode}
                  mask="99.999-999"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('number') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.InputGroupFlex>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (adicional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('complement') ? 'error' : ''}
              />
            </S.InputGroup>
            <Button
              title="Ir para pagamento"
              className="mt8"
              onClick={form.handleSubmit}
            >
              Ir para pagamento
            </Button>
            <CardButton onClick={goToCartList} className="mt8">
              Voltar para o carrinho
            </CardButton>
          </div>

          <div className={!isPaymentsOpen ? 'isHiden' : ''}>
            <S.Title>
              Pagamento - Valor a pagar {parseToBRL(getTotalPrice(items))}
            </S.Title>
            <S.InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroupFlex>
              <S.InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  mask="9999 9999 9999 9999"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup maxwidth="88px">
                <label htmlFor="code">CVV</label>
                <InputMask
                  type="text"
                  id="code"
                  name="code"
                  mask="999"
                  value={form.values.code}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('code') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.InputGroupFlex>
            <S.InputGroupFlex>
              <S.InputGroup>
                <label htmlFor="cardMonth">Mês de vencimento</label>
                <InputMask
                  type="text"
                  id="cardMonth"
                  name="cardMonth"
                  value={form.values.cardMonth}
                  mask="99"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardMonth') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="cardYear">Ano de vencimento</label>
                <InputMask
                  type="text"
                  id="cardYear"
                  name="cardYear"
                  value={form.values.cardYear}
                  mask="99"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardYear') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.InputGroupFlex>
            <Button
              className="mt24"
              onClick={form.handleSubmit}
              disabled={isLoading}
              title="Finalizar Pagamento"
            >
              {isLoading ? 'Finalizando compra...' : 'Finalizar Compra'}
            </Button>

            <CardButton type="button" className="mt8" onClick={goToDelivery}>
              Voltar para a edição de endereço
            </CardButton>
          </div>
        </form>

        <>
          <div className={!isConfirmsOpen ? 'isHiden' : ''}>
            <>
              {isSuccess && data ? (
                <S.OrderComplete>
                  <>
                    <h4>Pedido Realizado - {data.orderId}</h4>
                    <p>
                      Estamos felizes em informar que seu pedido já está em
                      processo de preparação e, em breve, será entregue no
                      endereço fornecido.
                    </p>
                    <p>
                      Gostaríamos de ressaltar que nossos entregadores não estão
                      autorizados a realizar cobranças extras.
                    </p>
                    <p>
                      Lembre-se da importância de higienizar as mãos após o
                      recebimento do pedido, garantindo assim sua segurança e
                      bem-estar durante a refeição.
                    </p>
                    <p>
                      Esperamos que desfrute de uma deliciosa e agradável
                      experiência gastronômica. Bom apetite!
                    </p>

                    <Link
                      to="/"
                      className="buttonComplete"
                      onClick={() => closeCart()}
                    >
                      Concluir
                    </Link>
                  </>
                </S.OrderComplete>
              ) : (
                <Loader />
              )}
            </>
          </div>
        </>

        <button className="closeModal" onClick={() => closeCart()} />
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
