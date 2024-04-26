import { FadeLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <FadeLoader color={colors.beige} />
    </Container>
  )
}

export default Loader
