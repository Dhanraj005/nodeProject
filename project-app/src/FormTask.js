import axios from "axios";
import React, { useState } from "react";

const  FormTask=()=>{
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [userList, setUserlist] = React.useState([]);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const saveData = () => {
    axios.post("http://localhost:5353/saveData", user)

      .then((res) => res.data)
      .then((res1) => {
        if (res1.statusCode === 303) {
          setUserlist(res1.result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <label> User Name:</label>
        <input type="text" onChange={handleChange} name='userName'></input>
        <lable>email:</lable>
        <input type="text" onChange={handleChange} name='email'></input>
        <label>password</label>
        <input type="password" onChange={handleChange} name='password'></input>
        <button type="button" onClick={saveData}>
          Click
        </button>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>password</th>
        </tr>
        <tr>
          <tr>
            {userList.map((obj)=>(
<tr>
<td>{obj.userName}</td>
<td>{obj.email}</td>
<td>{obj.password}</td>

</tr>
            ))}
          </tr>
        </tr>
      </table>
    </>
  );
}

export default FormTask;
