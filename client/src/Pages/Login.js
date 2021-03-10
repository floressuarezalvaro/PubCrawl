import React from "react";

const Login = () => {
  return (
    <div>
      <form onSubmit={() => console.log("hii")}>
        <label>Email</label>
        <input type="text" name="email" />
        <label>Password</label>
        <input type="text" name="password" />
        <input type="submit"/>
      </form>
    </div>
  );
};

export default Login;
