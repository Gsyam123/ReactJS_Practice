import React from "react";
import { useSelector } from "react-redux";

export const Person = () => {
  const myPersons = useSelector((state) => {
    return state.persons;
  });

  // console.log(myPersons);

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
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
