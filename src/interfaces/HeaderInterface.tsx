export default interface HeaderInterface {
  assets: string[]
  selectedBook: string
  handleChangeSelectedBook: (selectedBook: string) => void
}
