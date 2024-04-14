import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
