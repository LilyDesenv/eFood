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

type Props = {
  title: string
  image: string
  descricao: string
  portion: string
  price: number
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

const FoodCard = ({ title, descricao, image, portion, price }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 165) {
      return description.slice(0, 163) + '...'
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
        <FoodImg style={{ backgroundImage: `url(${image})` }}></FoodImg>
        <CardTitle>{title}</CardTitle>
        <DescrFood>{getDescription(descricao)}</DescrFood>
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
            <img src={image} alt="Imagem da comida do menu" />
          </div>
          <div className="infoFood">
            <CardTitle>{title}</CardTitle>
            <DescrFood>{descricao}</DescrFood>
            <DescrFood>Serve: {portion}</DescrFood>
            <CardButton>
              Adicionar ao carrinho - {formataPreco(price)}
            </CardButton>
          </div>
        </ModalContent>

        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default FoodCard
