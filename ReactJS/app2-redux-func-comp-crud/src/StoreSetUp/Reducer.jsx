const initialState = {
  persons: [
    {
      fullName: "Syam Kumar",
      email: "gsyam123@gmail.com",
      mobile: 9502440480,
    },
    {
      fullName: "Sai Kumar",
      email: "sai@gmail.com",
      mobile: 999999988,
    },
    {
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

    default:
      return state;
  }
};
