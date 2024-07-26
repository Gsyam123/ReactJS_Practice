const initialState = {
  persons: [
    {
      personId: 1,
      fullName: "Syam Kumar",
      email: "gsyam123@gmail.com",
      mobile: 9502440480,
    },
    {
      personId: 2,
      fullName: "Sai Kumar",
      email: "sai@gmail.com",
      mobile: 999999988,
    },
    {
      personId: 3,
      fullName: "Naveen Babu",
      email: "naveen@gmail.com",
      mobile: 888888877,
    },
  ],
  employees: [],
};

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEL_PERSON":
      return {
        persons: [
          ...state.persons.filter((pe) => pe.email !== action.payload.email),
        ],
      };
    case "CREATE_PERSON":
      return {
        persons: [...state.persons, action.payload],
      };

    case "UPDATE_PERSON":
      return {
        persons: [
          ...state.persons.map((pr) =>
            pr.email === action.payload.email ? action.payload : pr
          ),
        ],
      };
    default:
      return state;
  }
};
