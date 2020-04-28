import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit, errors } = useForm();
  const [signupInfo, newSignupInfo] = useState({
    name: "",
    email: "",
    pasword: "",
  });

  const handleChange = (event) => {
    newSignupInfo({
      ...signupInfo,
      [event.target.name]: event.target.value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axiosWithAuth()
  //     .post("/api/auth/register", newSignupInfo)
  //     .then((res) => {
  //       console.log({ res });
  //       push("");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <form>
      <input
        type="text"
        placeholder="User Name"
        name="User Name"
        onChange={handleChange}
        ref={register({ required: true, min: 2, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        name="Email"
        onChange={handleChange}
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="text"
        placeholder="Password"
        name="Password"
        onChange={handleChange}
        ref={register({ required: true, min: 1, maxLength: 12 })}
      />

			<input type="submit" />
		</form>
	);
}
