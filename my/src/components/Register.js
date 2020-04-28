import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function Register(props) {
  const { register } = useForm();

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
        props.push("/");
        // push this to re- log in
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User Name"
        name="username"
        onChange={handleChange}
        ref={register({ required: true, min: 2, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        ref={register({ required: true, min: 1, maxLength: 12 })}
      />

      <input type="submit" />
    </form>
  );
}
