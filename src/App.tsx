import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { GlobalCSS } from './styles'
import Rotas from './rotas'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
