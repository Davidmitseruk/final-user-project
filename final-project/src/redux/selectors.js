import { createSelector } from "@reduxjs/toolkit";

const getUsers = (state) => state.users.items;
const getFilter = (state) => state.users.filter;

export const selectFilteredUsers = createSelector(
  [getUsers, getFilter],
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