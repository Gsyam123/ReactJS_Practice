import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPersonAction,
  deletePersonAction,
  updatePersonAction,
} from "../StoreSetUp/Action";

export const Person = () => {
  const [person, setPerson] = useState({
    personId: "",
    fullName: "",
    email: "",
    mobile: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const myPersons = useSelector((state) => {
    return state.persons;
  });

  const dispatch = useDispatch();

  const deletePerson = (per) => {
    dispatch(deletePersonAction(per));
  };

  const handleChange = (e) => {
    let newPerson = { ...person };
    newPerson[e.target.name] = e.target.value;
    setPerson(newPerson);
  };

  const handleClear = () => {
    setPerson({
      personId: "",
      fullName: "",
      email: "",
      mobile: "",
    });
  };

  const createPerson = () => {
    dispatch(createPersonAction(person));
    handleClear();
  };

  const handleEditPerson = (per) => {
    setPerson(per);
    setIsEdit(true);
  };
  const updatePerson = () => {
    dispatch(updatePersonAction(person));
    setIsEdit(false);
    handleClear();
  };
  return (
    <div>
      <form>
        <label htmlFor="personId">personId : </label>
        <input
          type="tel"
          name="personId"
          value={person.personId}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label htmlFor="fullName">fullName : </label>
        <input
          type="text"
          name="fullName"
          value={person.fullName}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label htmlFor="email">email : </label>
        <input
          type="email"
          name="email"
          value={person.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label htmlFor="mobile">mobile : </label>
        <input
          type="mobile"
          name="mobile"
          value={person.mobile}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
      </form>
      {isEdit ? (
        <button type="button" onClick={updatePerson}>
          Update-Person
        </button>
      ) : (
        <button type="button" onClick={createPerson}>
          Submit-Person
        </button>
      )}

      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
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
                <td>{per.personId}</td>
                <td>{per.fullName}</td>
                <td>{per.email}</td>
                <td>{per.mobile}</td>
                <td>
                  <button onClick={() => handleEditPerson(per)}>Edit</button>
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
