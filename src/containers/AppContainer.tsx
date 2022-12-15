import { connect } from 'react-redux';
import App from '../components/App';
import { addAsks, addBids, changeActualPrice, updateLastUpdateId } from '../slicers/orderBookSlicer'

const mapStateToProps = (state: any) => ({
  orderBook: state.orderBook
})

const mapDispatchToProps = (dispatch: any) => ({
  changeActualPrice: (newPrice: number) => dispatch(changeActualPrice(newPrice)),
  updateLastUpdateId: (id: number) => dispatch(updateLastUpdateId(id)),
  addBids: ((bids: string[][]) => dispatch(addBids(bids))),
  addAsks: ((bids: string[][]) => dispatch(addAsks(bids)))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
