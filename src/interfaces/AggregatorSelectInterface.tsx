export default interface AggregatorSelectInterface {
  aggregators: number[]
  choosenAggregator: number
  changeChoosenAggregator: (newAggregator: number) => void
}
