import { connect } from 'react-redux';

import ValidationPage from '../../components/ValidationPage';

const mapStateToProps = (state, ownprops) => ({
    cart: state.command.cart,
    user: state.command.user,
    listPrice: state.command.listPrice,
})

const mapDispatchToProps = (dispatch, ownprops) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ValidationPage);