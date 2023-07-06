

import axios from 'axios'
import React from 'react'

const FormData = () => {

const [user,setUser]=React.useState({

    userName:"",
    userId:'',
    password:'',
    
})
    
const handleSubmit=(event)=>{
    setUser({...user,[event.target.name]:event.target.value})
}

const [listUser,setListUser]=React.useState([])

const handleClick=()=>{
axios.post("http://localhost:1111/saveUser",user)
.then((res)=>res.data)
.then((rest)=>{
    if(rest.statusCode === 505){
        setListUser(rest.result);
    }
})
.catch((error)=>{
    console.log(error);
});


}





  return (
    <div>
      <label>Name</label>
      <input type='text' onChange={handleSubmit} name='userName'></input>
      <lable>User Id</lable>
      <input type='text' onChange={handleSubmit} name='userId'></input>
      <lable>Password</lable>
      <input type='text' onChange={handleSubmit} name='password'></input>
   <lable>Contact Number</lable>
   <button type='button' onClick={handleClick}>Click</button>
   

   <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>password</th>
        </tr>
        <tr>
          <tr>
            {listUser.map((obj)=>(
<tr>
<td>{obj.userName}</td>
<td>{obj.userId}</td>
<td>{obj.password}</td>

</tr>
            ))}
          </tr>
        </tr>
      </table>
  
    </div>
  )
}



export default FormData



