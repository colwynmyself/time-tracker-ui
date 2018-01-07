import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Home.css';

function Home(props) {
  return (
    <div>
      Users in system: {props.isLoading ? 'Loading...' : props.userList.map(u => (
        <span key={u.id}>{u.name}</span>
      ))}
    </div>
  );
}

Home.propTypes = {
  isLoading: PropTypes.bool,
  userList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

Home.defaultProps = {
  isLoading: true,
  userList: [],
};

export default Home;
