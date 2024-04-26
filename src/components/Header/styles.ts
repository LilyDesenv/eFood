import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import fundoHeader from '../../assets/images/fundoHeader.png'

export const HeaderBar = styled.header`
  background-image: url(${fundoHeader});
  background-repeat: no-repeat;
  background-size: cover;

  color: ${colors.orange};

  width: 100%;
  height: 360px;
  padding: 32px;
`

export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  margin-top: 140px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    line-height: 25px;
  }
`
