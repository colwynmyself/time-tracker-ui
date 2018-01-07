import { connect } from 'react-redux';
import querystring from 'query-string';
import { push } from 'react-router-redux';

import Login from '../pages/Login';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  const qs = querystring.parse(window.location.search);
  if (qs.jwt) {
    // TODO: Break this out to a different route maybe?
    window.localStorage.setItem('jwt', qs.jwt);
    dispatch(push('/'));
  }

  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
