import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'
import Food from '../../models/Food'
import pizza from '../../assets/images/margerita.png'
import spaget from '../../assets/images/spaghetti.jpg'
import sushi from '../../assets/images/sushi.jpg'
import combo from '../../assets/images/combo.jpg'

const foodsTratoria: Food[] = [
  {
    id: 1,
    title: 'Pizza Margerita',
    image: pizza,
    price: 0,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    title: 'Spaghetti com almondegas',
    image: spaget,
    price: 0,
    descricao:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure velit nemo dolorum quidem ipsa odio, tempora, nulla reprehenderit doloremque'
  },
  {
    id: 3,
    title: 'Pizza Margerita',
    image: pizza,
    price: 0,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    title: 'Spaghetti com almondegas',
    image: spaget,
    price: 0,
    descricao:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure velit nemo dolorum quidem ipsa odio, tempora, nulla reprehenderit doloremque'
  },
  {
    id: 9,
    title: 'Pizza Margerita',
    image: pizza,
    price: 0,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 10,
    title: 'Spaghetti com almondegas',
    image: spaget,
    price: 0,
    descricao:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure velit nemo dolorum quidem ipsa odio, tempora, nulla reprehenderit doloremque'
  }
]

const foodsHioki: Food[] = [
  {
    id: 5,
    title: 'Sushi',
    image: sushi,
    price: 0,
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi voluptatibus ad fuga quos sint illum maxime officiis dolorum dicta, eaque! '
  },
  {
    id: 6,
    title: 'Combo Japonês',
    image: combo,
    price: 0,
    descricao:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure velit nemo dolorum quidem ipsa odio, tempora, nulla reprehenderit doloremque. '
  },
  {
    id: 7,
    title: 'Sushi',
    image: sushi,
    price: 0,
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi voluptatibus ad fuga quos sint illum maxime officiis dolorum dicta, eaque!'
  },
  {
    id: 8,
    title: 'Combo Japonês',
    image: combo,
    price: 0,
    descricao:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure velit nemo dolorum quidem ipsa odio, tempora, nulla reprehenderit doloremque.'
  },
  {
    id: 11,
    title: 'Sushi',
    image: sushi,
    price: 0,
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi voluptatibus ad fuga quos sint illum maxime officiis dolorum dicta, eaque!'
  },
  {
    id: 12,
    title: 'Combo Japonês',
    image: combo,
    price: 0,
    descricao:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure velit nemo dolorum quidem ipsa odio, tempora, nulla reprehenderit doloremque, amet consequatur eveniet labore perspiciatis quia neque ipsam rem ullam corrupti?'
  }
]
const foods = foodsTratoria
// const foods = foodsHioki

type Props = {
  NameRestaurant: string
}

const Restaurants = () => (
  <>
    <Banner />
    <div className="container">
      <FoodList foods={foods} />
    </div>
  </>
)

export default Restaurants
