export const createPersonAction = (p) => {
  return {
    type: "CREATE_PERSON",
    payload: p,
  };
};

export const updatePersonAction = (p) => {
  console.log(p);
  return {
    type: "UPDATE_PERSON",
    payload: p,
  };
};

export const deletePersonAction = (p) => {
  return {
    type: "DEL_PERSON",
    payload: p,
  };
};
