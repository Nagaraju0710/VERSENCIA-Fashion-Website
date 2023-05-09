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
    <div  >

      <div style={{
      width: "50%",
      textAlign: "center",
      position: "relative",
      left: "50%",
      transform: "translate(-50%, 20%)",
      padding: '20px',
      backgroundColor: "white",
      boxShadow: "0 0 20px 2px rgba(0, 0, 0, 0.4)"

    }} >
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </label>
          <br />
          <br />
          <button style={{ margin: "25px 0 15px 0", backgroundColor: "deeppink", color: "white" }} type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account?{" "}
          <button style={{ margin: "25px 0 15px 0", backgroundColor: "deeppink", color: "white" }} type="button" onClick={handleSignUpClick}>
            Sign up
          </button>
          .
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", backgroundColor: "azure", marginTop: "150px" }}>
                    <div>
                        <h1 style={{ fontFamily: "serif", color: "deeppink" }}>dribbble</h1>
                        <p>Dribbble is the world’s leading</p>
                        <p>community for creatives to share, grow,</p>
                        <p> and get hired.</p>
                        <a href="https://dribbble.com/dribbble"><img style={{ width: "25px" }} src="https://cdn.dribbble.com/users/39/avatars/normal/f342d2c8d6677c536875e7de73e481ee.png?1582211833" alt="error" /></a>
                        <a href="https://twitter.com/dribbble"><img style={{ width: "30px" }} src="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg" alt="error" /></a>
                        <a href="https://www.facebook.com/dribbble"><img style={{ width: "50px" }} src="https://1000logos.net/wp-content/uploads/2016/11/fb-logo.jpg" alt="error" /></a>
                        <a href="https://www.instagram.com/dribbble/"><img style={{ width: "30px" }} src="https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg?w=2000" alt="error" /></a>
                        <a href="https://www.pinterest.com/dribbble/"><img style={{ width: "30px" }} src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-pinterest-social-media-icon-design-template-vector-png-image_3654773.jpg" alt="error" /></a>
                    </div>
                    <div>
                        <h4>For designers</h4>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Go Pro!</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Explore design work</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Design blog</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Overtime podcast</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Playoffs</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Code of conduct</p></a>
                    </div>
                    <div>
                        <h4>Hire designers</h4>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Post a job opening</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Post a freelance projectk</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Design blog</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Search for designers</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Brands</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Advertise with us</p></a>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>About</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Careers</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Support</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Media kit</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Testimonials</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>API</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Terms of service</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Privacy policy</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Cookie policy</p></a>
                    </div>
                    <div>
                        <h4>Directories</h4>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Design jobs</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Designers for hire</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Freelance designers for hire</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Tags</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Places</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Design assets</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Dribbble Marketplace</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Creative Market</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Fontspring</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Font Squirrel</p></a>
                    </div>
                    <div>
                        <h4>Design Resources</h4>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Freelancing</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Design Hiring</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Design Portfolio</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Design Education</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Creative Process</p></a>
                        <a style={{ textDecoration: "none", color: "black" }} href=""><p>Design Industry Trends</p></a>
                    </div>
                </div>
    </div>
  );
};

export default Signin;
