import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.bege};

  border: 8px solid ${cores.laranja};
`
export const FoodImg = styled.div`
  width: 100%;

  height: 160px;

  background-size: cover;
  background-position: center;
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;

  margin-top: 8px;
`

export const DescrFood = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: justify;
`

export const CardButton = styled.button`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  border: none;
  cursor: pointer;
`
