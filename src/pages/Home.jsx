import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Home.css';

function Home(props) {
  return (
    <div>
      Users in system: {props.users.requestingList ? 'Loading...' : props.users.list.map(u => (
        <span key={u.id}>{u.name}</span>
      ))}
    </div>
  );
}

Home.propTypes = {
  users: PropTypes.shape({
    requestingList: PropTypes.bool,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  }).isRequired,
};

export default Home;
