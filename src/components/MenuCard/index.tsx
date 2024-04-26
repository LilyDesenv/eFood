import { useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { parseToBRL } from '../../utils'

type Props = {
  menuItem: MenuItem
}

interface ModalState {
  isVisible: boolean
}

const FoodCard = ({ menuItem }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(menuItem))
    dispatch(open())
    closeModal()
  }

  const getDescription = (description: string) => {
    if (description.length > 155) {
      return description.slice(0, 152) + '...'
    }
    return description
  }

  const [modal, setModal] = useState<ModalState>({ isVisible: false })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <>
      <S.Card>
        <S.FoodImg
          style={{ backgroundImage: `url(${menuItem.foto})` }}
        ></S.FoodImg>
        <S.CardTitle>{menuItem.nome}</S.CardTitle>
        <S.DescrFood>{getDescription(menuItem.descricao)}</S.DescrFood>
        <S.CardButton
          onClick={() => {
            setModal({ isVisible: true })
          }}
        >
          Adicionar ao carrinho
        </S.CardButton>
      </S.Card>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent>
          <div>
            <img src={menuItem.foto} alt="Imagem da comida do menu" />
          </div>
          <div className="infoFood">
            <S.CardTitle>{menuItem.nome}</S.CardTitle>
            <S.DescrFood>{menuItem.descricao}</S.DescrFood>
            <S.DescrFood>Serve: {menuItem.porcao}</S.DescrFood>
            <S.CardButton onClick={addToCart}>
              Adicionar ao carrinho - {parseToBRL(menuItem.preco)}
            </S.CardButton>
          </div>

          <button className="closeModal" onClick={() => closeModal()} />
        </S.ModalContent>

        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </>
  )
}

export default FoodCard
