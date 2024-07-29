const initialState = {
  users: [
    {
      userId: 1,
      userName: "syam",
      userMobile: 123456789,
    },
    {
      userId: 2,
      userName: "sai",
      userMobile: 2222222,
    },
    {
      userId: 3,
      userName: "naveen",
      userMobile: 33333333333,
    },
    {
      userId: 4,
      userName: "kumar",
      userMobile: 55555555,
    },
    {
      userId: 5,
      userName: "durga",
      userMobile: 444444444,
    },
  ],
  employees: [],
  customers: [],
};

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USR":
      return {
        users: [...state.users, action.payload],
      };
    case "UPDATE_USR":
      return {
        users: [
          ...state.users.map((u) =>
            u.userId === action.payload.userId ? action.payload : u
          ),
        ],
      };
    case "DEL_USR":
      return {
        users: [
          ...state.users.filter((u) => u.userId !== action.payload.userId),
        ],
      };
    default:
      return state;
  }
};
