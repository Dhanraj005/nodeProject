import React, { useState } from "react";
import axios from "axios";

const FormComp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  const [userList, setUserList] = React.useState([]);

  const handleinput = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveData = () => {
    console.log("111111111111");
    axios
      .post("http://localhost:5555/saveData", user)
      .then((res) => res.data)
      .then((res1) => {
        if (res1.statusCode === 201) {
          setUserList(res1.result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <label>First Name:</label>
      <input
        type="text"
        onChange={handleinput}
        name="firstName"
        placeholder="first name"
      />

      <label>Last Name:</label>
      <input
        type="text"
        onChange={handleinput}
        name="lastName"
        placeholder="Last name"
      />

      <button type="button" onClick={saveData}>
        submit
      </button>

      <table>
        <tr>
          <th>Firstname</th>
          <th>lastName</th>
        </tr>
        {userList.map((userObj) => (
          <tr>
            <td>{userObj.firstName}</td>
            <td>{userObj.lastName}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default FormComp;




