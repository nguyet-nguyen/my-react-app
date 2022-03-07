import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function ReactHookForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    // khai báo sử dụng hookForm
    const {register, handleSubmit, formState: { errors }} = useForm();
    //this.formState({errors: false });
    const onSubmit = data => console.log(data);
    const changeUsername = (event) => {
      setUsername(event.target.value);
    }
    const changePassword = (event) => {
      setPassword(event.target.value);
    }
    // const onHandleSubmit = (event) => {
    //   event.preventDefault();
    //   console.log("username:",username);
    //   console.log("password:",password);
    // }
    return (
        <div className='ui container'>
          <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label>Username</label>
              <input 
              {...register("username", {required: true})}
              />
              {errors.username && <p style={{ color: 'red' }}>Test required</p>}
            </div>
            <div className="field">
              <label>Password</label>  
              <input
              {...register("password", {required: true, minLength: 3, maxLength: 5})} 
              />        
              {errors.password?.type==='minLength' && <p style={{ color: 'red' }}>Khong duoc nho hon 3 ky tu</p>}
              {errors.password?.type==='maxLength' && <p style={{ color: 'red' }}>Khong duoc lon hon 5 ky tu</p>}
            </div>
            <button className="ui inverted orange button" disabled={errors.password || errors.username} type="submit">Submit</button>
          </form>
        </div>
      )
}
