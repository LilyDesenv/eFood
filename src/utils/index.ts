export const parseToBRL = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: MenuItem[]) => {
  return items.reduce((acumulator, currentValue) => {
    return (acumulator += currentValue.preco)
  }, 0)
}
