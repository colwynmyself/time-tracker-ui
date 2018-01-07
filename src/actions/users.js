import { apiRequest } from '../util/request';

export const REQUESTING_USER_LIST = '@@tt/REQUESTING_USER_LIST';
const requestingUserList = () => ({
  type: REQUESTING_USER_LIST,
});

export const USER_LIST_RECEIVED = '@@tt/USER_LIST_RECEIVED';
const userListReceived = data => ({
  data,
  type: USER_LIST_RECEIVED,
});

export const USER_LIST_ERROR = '@@tt/USER_LIST_ERROR';
const userListError = error => ({
  error,
  type: USER_LIST_ERROR,
});

export const requestUserList = () => (dispatch) => {
  dispatch(requestingUserList());

  return apiRequest('/users')
    .then((response) => {
      dispatch(userListReceived(response));
    })
    .catch((err) => {
      dispatch(userListError(err.message));
    });
};
