import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import axios from 'axios'

const LoginSignup = () => {
  const [state, setSate] = useState("Login")
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler =(e)=>{
    setFormData({
      ...formData,[e.target.name]:[e.target.value]
    })
  }

  const login  = async ()=>{
    try {
      axios.post("http://localhost:4000/login", { formData })
        .then(e => {
          const { success, token } = e.data;
          console.log(token);
          localStorage.setItem("token", token);
          window.location.replace('/');
        })
        .catch(error => {
          // Handle error here
          alert("User already exist")
          console.error("Error:", error);
        });
    } catch (error) {
      // Handle any synchronous errors here
      console.error("Error:", error);
    }
  }

  // const signup  = async ()=>{
  //   console.log("signup function executed",formData)
  //   let responseData;
  //   await fetch("http://localhost:4000/signup",{
  //     method:"POST",
  //     headers:{
  //       Accept:'application/form-data',
  //       'Content-Type':"application/json"
  //     },
  //     body:JSON.stringify(formData)
  //   })
  //   .then((response)=>{response.data})
  //   .then((data)=>{responseData = data})

  //   if(responseData.success){
  //     localStorage.setItem('auth-token',responseData.token)
  //     window.location("/")
  //   }
  // }


const signup = () => {
  try {
    axios.post("http://localhost:4000/signup", { formData })
      .then(e => {
        const { success, token } = e.data;
        // console.log(token);
        localStorage.setItem("token", token);
        window.location.replace('/');
      })
      .catch(error => {
        // Handle error here
        alert("User already exist")
        console.error("Error:", error);
      });
  } catch (error) {
    // Handle any synchronous errors here
    console.error("Error:", error);
  }
}

  return (
    <div className='loginsignup'>
        <div className="loginsignup_container">
          <h1>{state}</h1>
          <div className="loginSignup_fields">
            {state === "Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder='Your name'  />:<></>}
            <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
            <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder='password'  />
          </div>
          <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
          {state==="Sign Up"?<p className='loginsignup_login'>Already have an account? <span onClick={()=>{setSate("Login")}}> login here </span></p>:
          <p className='loginsignup_login'>Create an account? <span onClick={()=>{setSate("Sign Up")}}> Click here </span></p>}
          <div className="loginsignup_agree">
            <input type="checkbox" name="" id="" />
            <p>By continue, i agree to the terms of the use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup
