class Food {
  id: number
  title: string
  price: number
  image: string
  descricao: string

  constructor(
    id: number,
    title: string,
    price: number,
    image: string,
    descricao: string
  ) {
    this.id = id
    this.title = title
    this.price = price
    this.image = image
    this.descricao = descricao
  }
}

export default Food
