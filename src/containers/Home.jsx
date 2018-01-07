import { connect } from 'react-redux';

import Home from '../pages/Home';
import { requestUserList } from '../actions/users';
import { getUserList } from '../selectors/users';

const mapStateToProps = state => getUserList(state);

const mapDispatchToProps = (dispatch) => {
  dispatch(requestUserList());

  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
