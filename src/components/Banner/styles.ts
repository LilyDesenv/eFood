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

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 48px 8px 8px 0;
  }
`
export const TextTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  text-align: left;
  @media (max-width: 767px) {
    margin-bottom: 16px;
    margin-left: 8px;
  }
`

export const TextCart = styled(TextTitle)`
  text-align: right;
  @media (max-width: 767px) {
    margin-top: 16px;
  }
`

export const BannerImg = styled.div`
  width: 100%;
  padding: 32px;
  background-repeat: no-repeat;
  background-size: cover;
  /* filter: brightness(0.8); */
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
