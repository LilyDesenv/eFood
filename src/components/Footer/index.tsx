import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { Logo } from '../../styles'
import { Descricao, FooterBar, IconRedeSocial, RedesSociais } from './styles'

const Footer = () => (
  <FooterBar>
    <Logo src={logo} />
    <RedesSociais>
      <IconRedeSocial src={instagram} />
      <IconRedeSocial src={facebook} />
      <IconRedeSocial src={twitter} />
    </RedesSociais>
    <Descricao>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.
    </Descricao>
  </FooterBar>
)

export default Footer
