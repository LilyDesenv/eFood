import { Card, CardButton, CardTitle, DescrFood, FoodImg } from './styles'

type Props = {
  title: string
  image: string
  descricao: string
}

const FoodCard = ({ title, descricao, image }: Props) => (
  <Card>
    <FoodImg style={{ backgroundImage: `url(${image})` }}>a</FoodImg>
    <CardTitle>{title}</CardTitle>
    <DescrFood>{descricao}</DescrFood>
    <CardButton>Adicionar ao carrinho</CardButton>
  </Card>
)

export default FoodCard
