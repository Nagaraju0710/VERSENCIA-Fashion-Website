import React, { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user exists with the given email and password
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = existingUsers.find((user) => user.email === email && user.password === password);

    if (!currentUser) {
      alert("Incorrect email or password. Please try again.");
      return;
    }

    // Sign in successful
    alert("Sign-in successful!");
    window.location.href = "/";

  };

  const handleSignUpClick = () => {
    window.location.href = "/signup";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account?{" "}
        <button type="button" onClick={handleSignUpClick}>
          Sign up
        </button>
        .
      </p>
    </div>
  );
};

export default Signin;
