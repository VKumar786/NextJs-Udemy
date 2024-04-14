import { useState } from "react";
import classes from "./auth-form.module.css";

function AuthForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isLogin) {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.warn(res);

      if (!res.ok) {
        const data = await res.json();
        alert(data.message || "Something went wrong!");
      }
    }
  }

  function handleChange(event) {
    const { id, value } = event.target;
    setData((prevState) => {
      return { ...prevState, [id]: value };
    });
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
