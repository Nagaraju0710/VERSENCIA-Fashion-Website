
import React, { useState } from "react";


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user is already registered with the given email
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isExistingUser = existingUsers.some((user) => user.email === email);

    if (isExistingUser) {
      alert("You are already signed up. Please log in.");
      return;
    }

    // Save new user data
    const newUser = { firstName, lastName, email, password };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    setIsRegistered(true);
    window.location.href = "./Signin"
    
   
  };

  const handleSignInClick = () => {
    window.location.href = "./Signin"
  };
  return (
    <div
      style={{
        display: 'flex',
      
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <div>
      {isRegistered ? (
        // <p>
        //   Already registered?{" "}
        //   <button type="button" onClick={handleSignInClick}>
        //     Sign in
        //   </button>
        //   .
        // </p>
        {handleSignInClick}
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} required />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={handleLastNameChange} required />
          </label>
          <br />
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
          <button style={{backgroundColor:"deeppink",color:"white"}} type="submit">Sign Up</button>
          <p>
          Already registered?{" "}
          <button style={{backgroundColor:"deeppink",color:"white"}} type="button" onClick={handleSignInClick}>
            Sign in
          </button>
       
          .
        </p>
         
        </form>
      )}
    </div>
      
    </div>
  );
};
  
export default SignUp;