import { connect } from 'react-redux';

import Home from '../pages/Home';
import { requestUserList } from '../actions/users';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  dispatch(requestUserList());

  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
