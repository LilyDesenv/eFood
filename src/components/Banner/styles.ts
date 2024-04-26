import styled from 'styled-components'
import fundo from '../../assets/images/fundoHeader.png'
import { breakpoints, colors } from '../../styles'

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

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 48px 8px 8px 0;
  }
`
export const TextTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  text-align: left;
  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 16px;
    margin-left: 8px;
  }
`

export const TextCart = styled(TextTitle)`
  text-align: right;
  cursor: pointer;
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`

export const BannerImg = styled.div`
  width: 100%;
  padding: 32px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.4;
  }
`

export const NameRestaurant = styled.h2`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 900;
  margin-top: 160px;
  z-index: 1;
  position: relative;
`

export const NameCategory = styled.h2`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 100;
  z-index: 1;
  position: relative;
  text-transform: capitalize;
`
