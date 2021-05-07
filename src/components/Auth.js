import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/index";

import classes from "./Auth.module.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      console.log("enter email and password both");
      return;
    }
    if (!email.trim().includes("@")) {
      console.log("enter email having @ in it.");
      return;
    }

    if (password.trim().length < 8) {
      console.log("enter password of length greater than 8.");
      return;
    }

    dispatch(authActions.login());
  };

  return (!isAuthenticated && (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={emailChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={passwordChangeHandler}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  )
  );
};

export default Auth;
