const initialState = {
  users: [],
};

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_USERS":
      return {
        users: action.payload,
      };
    default:
      return state;
  }
};
