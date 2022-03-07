import React, { useState } from 'react'
export default function Product() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const messError = "Please input valid value";
  const changeUsername = (event) => {
    setUsername(event.target.value);
  }
  const changePassword = (event) => {
    setPassword(event.target.value);
  }
  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log("username:",username);
    console.log("password:",password);
  }
  
  return (
    <div className='ui container'>
      <form className="ui form" onSubmit={onHandleSubmit}>
        <div className="field">
          <label>Username</label>
          <input type="text" name="username" id="username" value={username} placeholder="Username" onChange={changeUsername}/>
          <p style={{ color: 'red' }}>
            {username==="" && messError}
          </p>
        </div>
        <div className="field">
          <label>Password</label>  
          <input type="password" name="password" id="password" value={password} placeholder="Password" onChange={changePassword} />
          <p style={{ color: 'red' }}> {password==="" && messError}</p>
        </div>
        <button className="ui inverted orange button" disabled={password==="" || username===""} type="submit">Submit</button>
      </form>
    </div>
  )
}
