 import {connect} from 'react-redux';
 import {createStructuredSelector} from 'reselect';
 import {selectIsCollectionsFetching} from '../../redux/shop/shop.selectors';
 import WithSpinner from '../withSpinner/with-spinner.component';
import CollectionsOverview from'./collections-overview.component';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;