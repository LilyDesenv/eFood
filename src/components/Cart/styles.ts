import styled from 'styled-components'
import { Button, breakpoints, colors } from '../../styles'
import del from '../../assets/images/delete.png'

type InputGroupProps = {
  maxwidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  content: '';
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.isOpen {
    display: flex;
  }

  .isHiden {
    display: none;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.orange};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }

  ${Button} {
    width: 100%;
  }
`
export const Prices = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.beige};
  margin-bottom: 16px;
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  position: relative;
  background-color: ${colors.beige};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
    margin-bottom: 4px;
  }

  h3 {
    color: ${colors.orange};
    font-weight: bold;
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
  }

  p {
    display: block;
    color: ${colors.orange};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  }

  .delete {
    background-image: url(${del});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 76px;
    right: 8px;
    cursor: pointer;
  }
`

export const MsgEmptyCart = styled.li`
  color: ${colors.beige};
  text-align: center;
`

export const OrderComplete = styled.div`
  width: 100%;
  display: block;
  h4 {
    color: ${colors.beige};
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
    margin-bottom: 16px;
  }

  p {
    color: ${colors.beige};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  .buttonComplete {
    background-color: ${colors.beige};
    color: ${colors.orange};
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    padding: 4px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Title = styled.h2`
  color: ${colors.beige};
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const InputGroup = styled.div<InputGroupProps>`
  color: ${colors.beige};
  padding-bottom: 8px;
  max-width: ${(props) => props.maxwidth || 'auto'};
  flex: auto;

  label {
    color: ${colors.beige};
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
  }

  input {
    background-color: ${colors.beige};
    border: 1px solid ${colors.beige};
    display: block;
    width: 100%;
    height: 32px;
    padding-left: 4px;

    &.error {
      border: 3px solid #ff0000;
      background-color: #ffcccc;
    }
  }
`
export const InputGroupFlex = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  padding-bottom: 8px;
`
