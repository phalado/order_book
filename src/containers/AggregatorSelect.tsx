import { connect } from 'react-redux';
import AggregatorSelect from '../components/AggregatorSelect';
import OrderBookSlice from '../interfaces/OrderBookSlice';
import { changeChoosenAggregator } from '../slicers/orderBookSlicer'

const mapStateToProps = (state: { orderBook: OrderBookSlice }) => ({
  aggregators: state.orderBook.aggregators,
  choosenAggregator: state.orderBook.choosenAggregator
})

const mapDispatchToProps = (dispatch: any) => ({
  changeChoosenAggregator: ((newAggregator: number) => dispatch(changeChoosenAggregator(newAggregator)))
})

export default connect(mapStateToProps, mapDispatchToProps)(AggregatorSelect);
