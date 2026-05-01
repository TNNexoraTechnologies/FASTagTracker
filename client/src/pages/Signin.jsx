import "./Signin.css";
import {Link} from "react-router-dom";
function Signin() {
  return (
    <div className="container">
 <p className="back"><a href="#">← Back to home</a></p>


      <div className="card">
        

        <div className="logoBox">
          <div className="logo">⚡</div>
          <h2>TagPulse</h2>
        </div>

        <h1>Welcome back</h1>

        <p className="subtitle">
          Sign in to view your live FASTag dashboard.
        </p>

        <div className="inputBox">
          <label>Email</label>
          <input type="email" placeholder="you@tagpulse.io" />
        </div>

        <div className="inputBox">
          <label>Password</label>
          <input type="password" placeholder="******" />
        </div>

             <div className="options">
  <div className="remember">
    <input type="checkbox" />
    <span>Remember me</span>
    
  </div>
  <p className="forgot">Forgot password?</p>
</div>
        <button className="btn">Sign in →</button>
    

        <p className="bottomText">
          Don't have an account?<Link to ="/">Sign up free</Link> 
        
        </p>

      </div>
    </div>
  );
}

export default Signin;