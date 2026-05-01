import React from "react";
import "./Signup.css";
import {Link} from "react-router-dom";
function Signup() {
  return (
    <div className="signup-container">

      <p className="back">← Back to home</p>

      <div className="signup-card">

        <div className="logo-row">
          <div className="logo-box">⚡</div>
          <h2>TagPulse</h2>
        </div>

        <h3 >Create your account</h3>
        <p className="subtext">
          Start tracking your tolls in under 60 seconds.
        </p>

        <form>

          <label>Full name</label>
          <div className="input-box">
            <input type="text" placeholder="Aarav Sharma" />
          </div>

          <div className="row">

  <div className="field">
    <label>Vehicle</label>
    <div className="input-box">
      <input type="text" placeholder="HR26-DK-8930" />
    </div>
  </div>

  <div className="field">
    <label>Phone</label>
    <div className="input-box">
      <input type="text" placeholder="+91 98765..." />
    </div>
  </div>

</div>

          <label>Email</label>
          <div className="input-box">
            <input type="email" placeholder="you@tagpulse.io" />
            <span className="icon"></span>
          </div>

          <label>Password</label>
          <div className="input-box">
            <input type="password" placeholder="********" />
            <span className="icon"></span>
          </div>

          <button className="btn">Create account →</button>

        </form>

        <p className="bottom">
          Already a member? <Link to ="/signin">Sign in</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;