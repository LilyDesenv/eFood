import { Card, CardButton, CardTitle, DescrFood, FoodImg } from './styles'
import margerita from '../../assets/images/margerita.png'

const FoodCard = () => (
  <Card>
    <FoodImg src={margerita} />
    <CardTitle>Pizza Margerita</CardTitle>
    <DescrFood>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </DescrFood>
    <CardButton>Adicionar ao carrinho</CardButton>
  </Card>
)

export default FoodCard
