import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {
  const [form, setForm] = useState();
  const history = useHistory();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = await axios.post("/users/register", form);

      console.log(newUser);
      history.push("/");
    } catch (err) {
    toast.error(err.response.data.msg);
    }
  };

  const logIn = () => {
    history.push("/");
  };

  const buttonStyle1 = {
    color: "#fafafa",
    backgroundColor: "#424242",
    border: "0px",
    borderRadius: "5px",
    width: "150px",
    padding: "8px 10px",
    margin: "0",
    position: "absolute",
    left: "50%",
    top: "60%",
    transform: "translate(-50%, -50%)",
  };

  const buttonStyle2 = {
    color: "#fafafa",
    backgroundColor: "#bdbdbd",
    border: "0px",
    borderRadius: "5px",
    width: "150px",
    padding: "8px 10px",
    margin: "0",
    position: "absolute",
    left: "50%",
    top: "66%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div>
      <form className="container" onSubmit={submit}>
        <label>Email</label>
        <input onChange={onChange} type="text" name="email" />
        <label>Password</label>
        <input onChange={onChange} type="text" name="password" />
        <label>Password Check</label>
        <input onChange={onChange} type="text" name="passwordCheck" />
        <label>Display Name</label>
        <input onChange={onChange} type="text" name="displayName" />
        <input style={buttonStyle1} type="submit" value="Register" />
        <input
          style={buttonStyle2}
          onClick={logIn}
          type="submit"
          value="Log in"
        />
      </form>
    </div>
  );
};

export default Register;
