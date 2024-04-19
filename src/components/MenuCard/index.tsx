import { useState } from 'react'
import {
  Card,
  CardButton,
  CardTitle,
  DescrFood,
  FoodImg,
  Modal,
  ModalContent
} from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { MenuItem } from '../../pages/Home'

type Props = {
  menuItem: MenuItem
}

interface ModalState {
  isVisible: boolean
}

export const formataPreco = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
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
      <Card>
        <FoodImg style={{ backgroundImage: `url(${menuItem.foto})` }}></FoodImg>
        <CardTitle>{menuItem.nome}</CardTitle>
        <DescrFood>{getDescription(menuItem.descricao)}</DescrFood>
        <CardButton
          onClick={() => {
            setModal({ isVisible: true })
          }}
        >
          Adicionar ao carrinho
        </CardButton>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <div>
            <img src={menuItem.foto} alt="Imagem da comida do menu" />
          </div>
          <div className="infoFood">
            <CardTitle>{menuItem.nome}</CardTitle>
            <DescrFood>{menuItem.descricao}</DescrFood>
            <DescrFood>Serve: {menuItem.porcao}</DescrFood>
            <CardButton onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(menuItem.preco)}
            </CardButton>
          </div>

          <button className="closeModal" onClick={() => closeModal()} />
        </ModalContent>

        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default FoodCard
