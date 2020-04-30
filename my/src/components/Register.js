import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

export default function Register() {
  const { register } = useForm();
  const { push } = useHistory();

  const [signupInfo, newSignupInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    newSignupInfo({
      ...signupInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signupInfo);
    axiosWithAuth()
      .post("/api/auth/register", signupInfo)
      .then((res) => {
        console.log({ res });
        push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Sign Up!</div>
      <input
        type="text"
        placeholder="User Name"
        name="username"
        onChange={handleChange}
        ref={register({ required: true, min: 2, maxLength: 80 })}
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        ref={register({ required: true, min: 1, maxLength: 12 })}
      />
      <br />
      <input type="submit" />
    </form>
  );
}
