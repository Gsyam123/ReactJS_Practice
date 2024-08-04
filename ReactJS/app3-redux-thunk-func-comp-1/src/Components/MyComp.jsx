import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserAction,
  deleteUserAction,
  getAllUsersAction,
  updateUserAction,
} from "../Store/action";

export const MyComp = () => {
  const [user, setUser] = useState({
    uName: "",
    uEmail: "",
    uMobile: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const store_Users = useSelector((state) => {
    return state.users;
  });
  console.log(store_Users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleClear = () => {
    setUser({
      uName: "",
      uEmail: "",
      uMobile: "",
    });
  };
  const handleSubmit = () => {
    dispatch(createUserAction(user));
    handleClear();
  };

  const deleteUser = (usr) => {
    dispatch(deleteUserAction(usr));
  };

  const editUser = (usr) => {
    setUser(usr);
    setIsEdit(true);
  };

  const updateUser = () => {
    dispatch(updateUserAction(user));
    handleClear();
    setIsEdit(false);
  };
  return (
    <div>
      <form>
        <label htmlFor="uName">uName : </label>
        <input
          type="text"
          name="uName"
          value={user.uName}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="uEmail">uEmail : </label>
        <input
          type="text"
          name="uEmail"
          value={user.uEmail}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="uMobile">uMobile : </label>
        <input
          type="text"
          name="uMobile"
          value={user.uMobile}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        {isEdit ? (
          <button onClick={updateUser} type="button">
            Update
          </button>
        ) : (
          <button onClick={handleSubmit} type="button">
            Submit
          </button>
        )}
      </form>

      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {store_Users.map((usr) => {
            return (
              <tr key={usr.id}>
                <td>{usr.uName}</td>
                <td>{usr.uEmail}</td>
                <td>{usr.uMobile}</td>
                <td>
                  <button onClick={() => editUser(usr)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteUser(usr)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
