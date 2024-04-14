import styled from 'styled-components'
import fundo from '../../assets/images/fundoHeader.png'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  width: 100%;
  background-image: url(${fundo});
`

export const DivGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 64px 0;
  justify-content: space-between;
`
export const TextTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  text-align: left;
`

export const TextCart = styled(TextTitle)`
  text-align: right;
`

export const BannerImg = styled.div`
  width: 100%;
  padding: 32px;
  background-repeat: no-repeat;
  background-size: cover;
`
export const NameRestaurant = styled.h2`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
  margin-top: 160px;
`

export const NameCategory = styled.h2`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
`
