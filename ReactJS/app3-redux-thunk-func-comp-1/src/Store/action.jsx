import axios from "axios";

export const getDataFromServer = (dispatch) => {
  axios.get("http://localhost:3001/users").then((res) => {
    dispatch({
      type: "GET_ALL_USERS",
      payload: res.data,
    });
  });
};

export const getAllUsersAction = () => {
  return (dispatch) => {
    getDataFromServer(dispatch);
  };
};

export const createUserAction = (user) => {
  return (dispatch) => {
    axios.post("http://localhost:3001/users", user).then(() => {
      getDataFromServer(dispatch);
    });
  };
};

export const deleteUserAction = (user) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3001/users/${user.id}`).then(() => {
      getDataFromServer(dispatch);
    });
  };
};

export const updateUserAction = (user) => {
  return (dispatch) => {
    axios.put(`http://localhost:3001/users/${user.id}`, user).then(() => {
      getDataFromServer(dispatch);
    });
  };
};
