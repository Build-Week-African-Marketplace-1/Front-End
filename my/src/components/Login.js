import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
  isFetching: false,
};

export default function Login(props) {
  //form state
  const [login, setLogin] = useState(initialState);
  const { register } = useForm();

  //create handle changes
  const handleChanges = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  //create handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin({ ...login, isFetching: true });
    console.log(login);
    axiosWithAuth()
      .post("/api/auth/login", login)
      .then((res) => {
        console.log(res);
        props.push("products");
      })
      .catch((err) => console.log("There was a problem with loging in ", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Link to={"/products"}>Merchandise</Link>
      <div>Log In</div>

      <input
        onChange={handleChanges}
        type="text"
        placeholder="User Name"
        name="username"
        ref={register({ required: true, min: 2, maxLength: 80 })}
      />
      <br></br>
      <input
        type="password"
        onChange={handleChanges}
        placeholder="Password"
        name="password"
        ref={register({ required: true, min: 1, maxLength: 12 })}
      />
      <br></br>

      <input type="submit" />
      <br></br>
      <Link className="link" to={"/Register"}>
        Sign up HERE
      </Link>
    </form>
  );
}
