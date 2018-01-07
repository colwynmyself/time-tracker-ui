import * as actions from '../actions/users';

export const initialState = {
  requestingList: false,
  list: [],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case actions.REQUESTING_USER_LIST: {
      return Object.assign({}, state, {
        requestingList: true,
      });
    }

    case actions.USER_LIST_ERROR: {
      return Object.assign({}, state, {
        requestingList: false,
      });
    }

    case actions.USER_LIST_RECEIVED: {
      return Object.assign({}, state, {
        requestingList: false,
        list: action.data.users,
      });
    }

    default: return state;
  }
}
