export const USER_DELETED = "USER_DELETED";

export const deleteUser = (userID) => {
  return {
    type: USER_DELETED,
    payload: {
      userID,
    },
  };
};
