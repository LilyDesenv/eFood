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
      <a href="https://www.instagram.com/">
        <IconRedeSocial src={instagram} />
      </a>
      <a href="https://www.facebook.com/">
        <IconRedeSocial src={facebook} />
      </a>
      <a href="https://twitter.com/">
        <IconRedeSocial src={twitter} />
      </a>
    </RedesSociais>
    <Descricao>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.
    </Descricao>
  </FooterBar>
)

export default Footer
