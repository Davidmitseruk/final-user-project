import { createSelector } from "reselect";

const selectUsers = (state) => state.users.items;
const selectFilter = (state) => state.users.filter;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    if (filter === "active") {
      return users.filter((u) => u.active);
    }
    if (filter === "inactive") {
      return users.filter((u) => !u.active);
    }
    return users;
  }
);