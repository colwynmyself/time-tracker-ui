import { createSelector } from 'reselect';

const getUsersState = state => state.users;

export const getUserList = createSelector(
  [getUsersState],
  usersData => ({
    isLoading: usersData.requestingList,
    userList: usersData.list,
  }),
);
