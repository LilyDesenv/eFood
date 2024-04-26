import styled, { createGlobalStyle } from 'styled-components'
import close from './assets/images/fechar.png'

export const colors = {
  lightBeige: '#FFF8F2',
  orange: '#E66767',
  white: '#fff',
  beige: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCSS = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body{
    background-color: ${colors.lightBeige};
    color: ${colors.orange};

    .mt8 {
      margin-top: 8px;
    }

    .mt24{
      margin-top: 24px;
    }

    .closeModal {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 16px;
      height: 16px;
      background-image: url(${close});
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .container{
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media(max-width: ${breakpoints.desktop}){
        max-width: 80%;
      }
    }
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  background-color: ${colors.orange};
  color: ${colors.beige};
  margin: 8px;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: center;
  border: none;
  cursor: pointer;
`
