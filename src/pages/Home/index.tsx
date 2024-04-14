import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import Restaurant from '../../models/Restaurant'
import hioki from '../../assets/images/hiokiSushi.png'
import trattoria from '../../assets/images/trattoria.png'

const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    category: 'Japonesa',
    infos: ['Destaque da semana', 'Japonesa'],
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    nota: 4.9,
    image: hioki
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    infos: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    image: trattoria
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    infos: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    image: trattoria
  },
  {
    id: 4,
    title: 'Hioki Sushi',
    category: 'Japonesa',
    infos: ['Japonesa'],
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    nota: 4.9,
    image: hioki
  }
]

const Home = () => (
  <>
    <Header />
    <div className="container">
      <RestaurantList restaurants={restaurants} />
    </div>
  </>
)

export default Home
