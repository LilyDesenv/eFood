class Restaurant {
  id: number
  title: string
  category: string
  infos: string[]
  nota: number
  descricao: string
  image: string

  constructor(
    id: number,
    title: string,
    category: string,
    infos: string[],
    image: string,
    nota: number,
    descricao: string
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.infos = infos
    this.image = image
    this.nota = nota
    this.descricao = descricao
  }
}
export default Restaurant
