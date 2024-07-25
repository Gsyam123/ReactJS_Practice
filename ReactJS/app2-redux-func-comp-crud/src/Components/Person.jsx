import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePersonAction } from "../StoreSetUp/Action";

export const Person = () => {
  const myPersons = useSelector((state) => {
    return state.persons;
  });

  const dispatch = useDispatch();

  // console.log(myPersons);
  const deletePerson = (per) => {
    dispatch(deletePersonAction(per));
  };
  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myPersons.map((per, i) => {
            return (
              <tr key={i}>
                <td>{per.fullName}</td>
                <td>{per.email}</td>
                <td>{per.mobile}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deletePerson(per);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
