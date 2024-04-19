import styled from 'styled-components'
import { Button, breakpoints, cores } from '../../styles'
import del from '../../assets/images/delete.png'
import { TagContainer } from '../Tag/styles'

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
`

export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
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
  color: ${cores.bege};
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
  background-color: ${cores.bege};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
    margin-bottom: 4px;
  }

  h3 {
    color: ${cores.laranja};
    font-weight: bold;
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
  }

  p {
    display: block;
    color: ${cores.laranja};
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
  color: ${cores.bege};
  text-align: center;
`
