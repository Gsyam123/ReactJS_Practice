export const deleteUserAction = (us) => {
  return {
    type: "DEL_USR",
    payload: us,
  };
};

export const createUserAction = (u) => {
  return {
    type: "CREATE_USR",
    payload: u,
  };
};

export const updateUserAction = (u) => {
  return {
    type: "UPDATE_USR",
    payload: u,
  };
};
