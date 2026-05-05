import "../styles/Signin.css";
import {Link} from "react-router-dom";
import logo from "../assets/Track.png";
function Signin() {
  return (
    <div className="container-1">
 
 

      <div className="card-1">
        

        <div className="logoBox">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
         
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